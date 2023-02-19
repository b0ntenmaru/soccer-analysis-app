import { getSeasonStatsById } from '@@/src/server/utils/getSeasonStatsById';

export default defineEventHandler(async (event) => {
  const seasonId = event.context.params.id;
  const data = await getSeasonStatsById({ seasonId });
  return data;
});
