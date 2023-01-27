const config = useRuntimeConfig()
const apiPath = config.public.API_PATH;
const apiKey = config.public.API_KEY;

export default defineEventHandler(async (event) => {
  const response: any = await $fetch(`${apiPath}/league-list?key=${apiKey}`)
  return response.data;
})
