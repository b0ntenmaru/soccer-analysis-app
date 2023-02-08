import { getFixturesOfTopLeaguesByDateRange } from '@@/src/server/utils/getFixturesOfTopLeaguesByDateRange';

export default defineEventHandler(async () => {
  const data = await getFixturesOfTopLeaguesByDateRange();
  return data;
});
