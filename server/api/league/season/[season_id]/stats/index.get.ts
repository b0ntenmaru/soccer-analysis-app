const config = useRuntimeConfig()
const apiPath = config.public.API_PATH;
const apiKey = config.public.API_KEY;

export default defineEventHandler(async (event) => {
  const seasonId = event.context.params.season_id;

  const response: any = await $fetch(`${apiPath}/league-season?key=${apiKey}&season_id=${seasonId}`)
  return response.data;
})
