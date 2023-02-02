// https://soccer.sportmonks.com/api/v2.0/standings/season/19735?api_token={{api_token}}&include=

const config = useRuntimeConfig()
const apiPath = config.public.API_PATH;
const apiKey = config.public.API_KEY;

export const getStandingsBySeasonId = async (args: { seasonId: number }): Promise<Array<Team>> => {
  const { seasonId } = args;
  const response: any = await $fetch(`${apiPath}/standings/season//${seasonId}?api_token=${apiKey}`);
  return response.data
};
