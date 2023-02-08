import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';

const { apiPath, apiKey } = useSportmonksApi();

export const getAllLeague = async (): Promise<Array<League>> => {
  const response: any = await $fetch(`${apiPath}/leagues?api_token=${apiKey}`);
  return response.data;
};
