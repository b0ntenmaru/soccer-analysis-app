import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { GetStandingsBySeasonId } from '@@/src/types/response_types/GetStandingsBySeasonId';

const { apiPath, apiKey } = useSportmonksApi();

export const getStandingsBySeasonId = async (args: { seasonId: number }): Promise<GetStandingsBySeasonId> => {
  const { seasonId } = args;
  const response: any = await $fetch(`${apiPath}/standings/season/${seasonId}?api_token=${apiKey}&include=standings.team,`);
  return response.data;
};
