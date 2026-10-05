from ScoutSuite.core.console import print_exception
from ScoutSuite.providers.aws.facade.basefacade import AWSBaseFacade
from ScoutSuite.providers.aws.facade.utils import AWSFacadeUtils
from ScoutSuite.providers.utils import run_concurrently, map_concurrently


class CodeBuild(AWSBaseFacade):
    # batch_get_projects accepts up to 100 names per call. One call per project throttled large accounts
    # (ThrottlingException on BatchGetProjects) and left their CodeBuild projects out of the report.
    BATCH_SIZE = 100

    async def get_projects(self, region: str):
        try:
            projects = await AWSFacadeUtils.get_all_pages('codebuild', region, self.session, 'list_projects', 'projects')
        except Exception as e:
            print_exception(f'Failed to get CodeBuild projects: {e}')
            return []
        if not projects:
            return []
        batches = [projects[i:i + self.BATCH_SIZE] for i in range(0, len(projects), self.BATCH_SIZE)]
        return await map_concurrently(self._get_project_details, batches, region=region)

    async def _get_project_details(self, names: list, region: str):
        codebuild_client = AWSFacadeUtils.get_client('codebuild', self.session, region)
        try:
            project_details = await run_concurrently(lambda: codebuild_client.batch_get_projects(names=names))
        except Exception as e:
            print_exception(f'Failed to get CodeBuild project details: {e}')
            return {}
        project_details.pop('ResponseMetadata', None)
        project_details.pop('projectsNotFound', None)
        return project_details
