const config = useRuntimeConfig()
const apiPath = config.public.API_PATH;
const apiKey = config.public.API_KEY;

export const getAllLeague = async (): Promise<Array<League>> => {
  const response: any = await $fetch(`${apiPath}/leagues?api_token=${apiKey}`)
  return response.data
}
