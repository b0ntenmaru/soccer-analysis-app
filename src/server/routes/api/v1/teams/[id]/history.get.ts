import { getAllLeaguesByTeamId } from '@@/src/server/utils/getAllLeaguesByTeamId';
import { convertToLeagueSeasons } from '@@/src/server/utils/convertToLeagueSeasons';

export default defineEventHandler(async (event) => {
  const teamId = event.context.params.id;
  const data = await getAllLeaguesByTeamId(teamId);
  const result = convertToLeagueSeasons(data);
  return result;
});
