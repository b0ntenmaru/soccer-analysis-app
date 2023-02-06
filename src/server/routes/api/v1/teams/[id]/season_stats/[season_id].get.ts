import { getTeamSeasonStats } from '@@/src/server/utils/getTeamSeasonStats';

export default defineEventHandler(async (event) => {
  const teamId = event.context.params.id;
  const seasonId = event.context.params.season_id;
  const data = await getTeamSeasonStats({ teamId, seasonId });
  return data;
});
