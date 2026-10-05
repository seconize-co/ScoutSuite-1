import unittest
from unittest import mock

from ScoutSuite.providers.aws.facade.utils import AWSFacadeUtils


class AWSClientRetriesTest(unittest.TestCase):
    """AWS clients retry throttled calls ("Rate exceeded") adaptively instead of giving up after 4 attempts."""

    def tearDown(self):
        AWSFacadeUtils._clients.clear()

    def test_clients_retry_throttling_adaptively(self):
        cfg = AWSFacadeUtils._client_config
        self.assertEqual(cfg.retries, {'max_attempts': 10, 'mode': 'adaptive'})

    def test_regional_client_uses_the_retry_config(self):
        session = mock.MagicMock()
        AWSFacadeUtils._clients.clear()
        AWSFacadeUtils.get_client('cloudformation', session, 'ap-south-1')
        session.client.assert_called_once_with('cloudformation', region_name='ap-south-1', config=AWSFacadeUtils._client_config)

    def test_global_client_uses_the_retry_config(self):
        session = mock.MagicMock()
        AWSFacadeUtils._clients.clear()
        AWSFacadeUtils.get_client('iam', session)
        session.client.assert_called_once_with('iam', config=AWSFacadeUtils._client_config)


if __name__ == '__main__':
    unittest.main()
