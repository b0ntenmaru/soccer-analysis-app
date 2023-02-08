import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';

const { apiPath, apiKey } = useSportmonksApi();

export const getLeagueById = async (args: { leagueId: number; include?: 'seasons' }): Promise<League> => {
  const response: any = await $fetch(
    `${apiPath}/leagues/${args.leagueId}?api_token=${apiKey}&include=${args.include}`
  );
  return response.data;
};
