import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { Season } from '@@/src/types/sportmonks_entity/Season';

const { apiPath, apiKey } = useSportmonksApi();

export type GetAllLeaguesByTeamIdData = Array<Season>;

export const getAllLeaguesByTeamId = async (teamId: number): Promise<GetAllLeaguesByTeamIdData> => {
  const response: any = await $fetch(
    `${apiPath}/teams/${teamId}/history?api_token=${apiKey}`
  );
  return response.data;
};
