import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { League } from 'src/types/sportmonks_entity/League';

type GetLeagueByIdData = League

const { apiPath, apiKey } = useSportmonksApi();

export const getLeagueById = async (args: { leagueId: number; include?: 'seasons' }): Promise<GetLeagueByIdData> => {
  const response: any = await $fetch(
    `${apiPath}/leagues/${args.leagueId}?api_token=${apiKey}&include=${args.include}`
  );
  return response.data;
};
