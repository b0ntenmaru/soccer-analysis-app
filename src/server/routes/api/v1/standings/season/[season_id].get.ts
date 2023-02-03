import { getStandingsBySeasonId } from '@@/src/server/utils/getStandingsBySeasonId';

export default defineEventHandler(async (event) => {
  const seasonId = event.context.params.season_id;
  const data = await getStandingsBySeasonId({ seasonId });
  return data;
});
