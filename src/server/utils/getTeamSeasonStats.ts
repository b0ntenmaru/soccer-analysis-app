const config = useRuntimeConfig();
const apiPath = config.public.API_PATH;
const apiKey = config.public.API_KEY;

/**
 * チームのシーズンごとのスタッツを返却する
 */
export const getTeamSeasonStats = async (args: { teamId: number; seasonId: number; }): Promise<StatsData> => {
  const { teamId, seasonId } = args;

  const response: any = await $fetch(
    `${apiPath}/teams/${teamId}?api_token=${apiKey}&include=stats&seasons=${seasonId}`
  );
  return response.data.stats.data;
};
