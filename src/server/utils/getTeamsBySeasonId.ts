import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';

const { apiPath, apiKey } = useSportmonksApi();

export const getTeamsbySeasonId = async (args: { seasonId: number }): Promise<Array<Team>> => {
  const response: any = await $fetch(`${apiPath}/teams/season/${args.seasonId}?api_token=${apiKey}`);
  return response.data;
};
