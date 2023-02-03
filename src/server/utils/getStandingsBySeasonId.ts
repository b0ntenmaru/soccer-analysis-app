const config = useRuntimeConfig();
const apiPath = config.public.API_PATH;
const apiKey = config.public.API_KEY;

export const getStandingsBySeasonId = async (args: { seasonId: number }): Promise<SeasonStandingsData> => {
  const { seasonId } = args;
  const response: any = await $fetch(`${apiPath}/standings/season/${seasonId}?api_token=${apiKey}&include=standings.team,`);
  return response.data;
};
