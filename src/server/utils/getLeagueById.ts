import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { League } from 'src/types/sportmonks_entity/League';

type GetLeagueByIdData = League

const { apiPath, apiKey } = useSportmonksApi();

export const getLeagueById = async (args: { leagueId: number; include?: Array<string> }): Promise<GetLeagueByIdData> => {
  const include = args.include?.join(',');

  const response: any = await $fetch(
    `${apiPath}/leagues/${args.leagueId}?api_token=${apiKey}&include=${include}`
  );
  return response.data;
};
