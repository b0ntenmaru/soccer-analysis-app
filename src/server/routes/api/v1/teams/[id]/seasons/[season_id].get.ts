import { getTeamById } from '@@/src/server/utils/getTeamById';

export default defineEventHandler(async (event) => {
  const teamId = event.context.params.id;
  const seasonId = event.context.params.season_id;
  const data = await getTeamById({ teamId, seasonId, include: ['country', 'coach', 'squad', 'stats', 'activeSeasons', 'trophies'] });
  return data;
});
