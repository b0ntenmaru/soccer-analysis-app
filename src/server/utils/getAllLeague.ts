import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { League } from '@@/src/types/sportmonks_entity/League';

export type GetAllLeague = Array<League>;

const { apiPath, apiKey } = useSportmonksApi();

export const getAllLeague = async (): Promise<GetAllLeague> => {
  const response: any = await $fetch(`${apiPath}/leagues?api_token=${apiKey}`);
  return response.data;
};
