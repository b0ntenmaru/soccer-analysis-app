import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { GetStandingsBySeasonIdData } from '~~/src/types/response_types/GetStandingsBySeasonIdData';

const { apiPath, apiKey } = useSportmonksApi();

export const getStandingsBySeasonId = async (args: { seasonId: number }): Promise<GetStandingsBySeasonIdData> => {
  const { seasonId } = args;
  const response: any = await $fetch(`${apiPath}/standings/season/${seasonId}?api_token=${apiKey}&include=standings.team,`);
  return response.data;
};
