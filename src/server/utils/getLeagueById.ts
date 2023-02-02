const config = useRuntimeConfig()
const apiPath = config.public.API_PATH;
const apiKey = config.public.API_KEY;

export const getLeagueById = async (args: { leagueId: number; include?: 'seasons' }): Promise<League> => {
  const response: any = await $fetch(
    `${apiPath}/leagues/${args.leagueId}?api_token=${apiKey}&include=${args.include}`
  )
  return response.data
}
