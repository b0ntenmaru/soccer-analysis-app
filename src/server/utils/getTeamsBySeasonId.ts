const config = useRuntimeConfig()
const apiPath = config.public.API_PATH;
const apiKey = config.public.API_KEY;

export const getTeamsbySeasonId = async (args: { seasonId: number }): Promise<Array<Team>> => {
  const response: any = await $fetch(`${apiPath}/teams/season/${args.seasonId}?api_token=${apiKey}`);
  return response.data
};
