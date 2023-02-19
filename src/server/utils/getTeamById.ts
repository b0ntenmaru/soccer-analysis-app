import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { GetTeamByIdData } from '@@/src/types/response_types/GetTeamByIdData';

const { apiPath, apiKey } = useSportmonksApi();

export const getTeamById = async (args: { teamId: number; include?: Array<string> }): Promise<GetTeamByIdData> => {
  const { teamId } = args;
  const include = args.include?.join(',');

  const response: any = await $fetch(
    `${apiPath}/teams/${teamId}?api_token=${apiKey}&include=${include}`
  );
  return response.data;
};
