import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { GetPlayerByIdData } from '@@/src/types/response_types/GetPlayerByIdData';

const { apiPath, apiKey } = useSportmonksApi();

export const getPlayerById = async (args: { playerId: number; include?: Array<string> }): Promise<GetPlayerByIdData> => {
  const { playerId } = args;
  const include = args.include?.join(',');
  const response: any = await $fetch(
    `${apiPath}/players/${playerId}?api_token=${apiKey}&include=${include}`
  );
  return response.data;
};
