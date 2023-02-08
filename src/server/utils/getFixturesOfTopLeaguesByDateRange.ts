import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';

const { apiPath, apiKey } = useSportmonksApi();
const startDate = '2023-02-05';
const endDate = '2023-02-07';
const path = `${apiPath}/fixtures/between/${startDate}/${endDate}?api_token=${apiKey}&leagues=2,5,8,24,72,82,301,384,390,564,570&include=localTeam,visitorTeam,league`;

export const getFixturesOfTopLeaguesByDateRange = async (): Promise<GetFixturesOfTopLeaguesByRangeData> => {
  const response: any = await $fetch(path);
  return response.data;
};
