const config = useRuntimeConfig();
const apiPath = config.public.API_PATH;
const apiKey = config.public.API_KEY;

export const getTeamById = async (args: { teamId: number; include?: Array<string> }): Promise<GetTeamByIdData> => {
  const { teamId } = args;
  const include = args.include?.join(',');

  const response: any = await $fetch(
    `${apiPath}/teams/${teamId}?api_token=${apiKey}&include=${include}`
  );
  return response.data;
};
