import { getTeamsbySeasonId } from '@@/src/server/utils/getTeamsBySeasonId';


export default defineEventHandler(async (event) => {
  const seasonId = event.context.params.season_id
  const data = await getTeamsbySeasonId({ seasonId });
  return data;;
})
