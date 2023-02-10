import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { Team } from '@@/src/types/sportmonks_entity/Team';

type GetTeamsbySeasonId = Array<Team>;

const { apiPath, apiKey } = useSportmonksApi();

export const getTeamsbySeasonId = async (args: { seasonId: number }): Promise<GetTeamsbySeasonId> => {
  const response: any = await $fetch(`${apiPath}/teams/season/${args.seasonId}?api_token=${apiKey}`);
  return response.data;
};
