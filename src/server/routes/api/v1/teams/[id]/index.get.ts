import { getTeamById } from '@@/src/server/utils/getTeamById';

export default defineEventHandler(async (event) => {
  const teamId = event.context.params.id;
  const data = await getTeamById({ teamId, include: ['country', 'coach', 'squad', 'activeSeasons', 'trophies'] });
  return data;
});
