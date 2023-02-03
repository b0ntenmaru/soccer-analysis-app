import { getLeagueById } from '@@/src/server/utils/getLeagueById';

export default defineEventHandler(async (event) => {
  const leagueId = event.context.params.id;
  const data = await getLeagueById({ leagueId, include: 'seasons' });
  return data;
});
