import asyncio
import unittest
from unittest import mock

from botocore.exceptions import ClientError

from ScoutSuite.providers.aws.facade.codebuild import CodeBuild
from ScoutSuite.providers.aws.facade.utils import AWSFacadeUtils
from ScoutSuite.providers.aws.resources.codebuild.build_projects import BuildProjects


def run(coro):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.throttler = mock.MagicMock()
    loop.throttler.__aenter__ = mock.AsyncMock(return_value=None)
    loop.throttler.__aexit__ = mock.AsyncMock(return_value=None)
    try:
        return loop.run_until_complete(coro)
    finally:
        loop.close()


def throttled(op):
    return ClientError({'Error': {'Code': 'ThrottlingException', 'Message': 'Rate exceeded'}}, op)


class FakeClient:
    def __init__(self, fail_batch_containing=None):
        self.batch_calls = []
        self.fail_batch_containing = fail_batch_containing

    def batch_get_projects(self, names):
        self.batch_calls.append(list(names))
        if self.fail_batch_containing in names:
            raise throttled('BatchGetProjects')
        return {'projects': [{'name': n, 'arn': 'arn:aws:codebuild:ap-south-1:111122223333:project/' + n} for n in names],
                'projectsNotFound': [], 'ResponseMetadata': {}}


class CodeBuildThrottlingTest(unittest.TestCase):
    def facade(self, names, client):
        cb = CodeBuild(mock.MagicMock())
        pages = mock.AsyncMock(return_value=names)
        return cb, mock.patch.object(AWSFacadeUtils, 'get_all_pages', pages), mock.patch.object(AWSFacadeUtils, 'get_client', return_value=client)

    def test_projects_are_fetched_100_per_call(self):
        names = ['p%d' % i for i in range(250)]
        client = FakeClient()
        cb, p1, p2 = self.facade(names, client)
        with p1, p2:
            result = run(cb.get_projects('ap-south-1'))
        self.assertEqual([len(c) for c in client.batch_calls], [100, 100, 50])
        self.assertEqual(sum(len(r['projects']) for r in result), 250)

    def test_a_failed_batch_does_not_crash_the_other_projects(self):
        names = ['p%d' % i for i in range(150)]
        client = FakeClient(fail_batch_containing='p0')   # first batch (p0..p99) throttled
        cb, p1, p2 = self.facade(names, client)
        with p1, p2:
            facade = mock.MagicMock()
            facade.codebuild = cb
            resource = BuildProjects(facade, 'ap-south-1')
            run(resource.fetch_all())   # used to raise TypeError: 'NoneType' object is not iterable
        self.assertEqual(len(resource), 50)

    def test_clients_retry_throttling_adaptively(self):
        cfg = AWSFacadeUtils._client_config
        self.assertEqual(cfg.retries, {'max_attempts': 10, 'mode': 'adaptive'})
        session = mock.MagicMock()
        AWSFacadeUtils._clients.clear()
        AWSFacadeUtils.get_client('cloudformation', session, 'ap-south-1')
        session.client.assert_called_once_with('cloudformation', region_name='ap-south-1', config=cfg)
        AWSFacadeUtils._clients.clear()


if __name__ == '__main__':
    unittest.main()
