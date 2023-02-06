const config = useRuntimeConfig();
const apiPath = config.public.API_PATH;
const apiKey = config.public.API_KEY;

export const getPlayerById = async (args: { playerId: number; include?: Array<string> }): Promise<GetPlayerByIdData> => {
  const { playerId } = args;
  const include = args.include?.join(',');
  const response: any = await $fetch(
    `${apiPath}/players/${playerId}?api_token=${apiKey}&include=${include}`
  );
  return response.data;
};
