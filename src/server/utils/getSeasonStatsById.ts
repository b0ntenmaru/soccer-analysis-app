import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { GetSeasonStatsByIdData } from 'src/types/response_types/GetSeasonStatsByIdData';

const { apiPath, apiKey } = useSportmonksApi();

const aggregatedGoalscorersQuery = 'aggregatedGoalscorers:limit(10|1).player.team';
const aggregatedAssistscorersQuery = 'aggregatedAssistscorers:limit(10|1).player.team';

const includeQuery = `stats,${aggregatedGoalscorersQuery},${aggregatedAssistscorersQuery}`;

export const getSeasonStatsById = async (args: { seasonId: number }): Promise<GetSeasonStatsByIdData> => {
  const { seasonId } = args;

  const response: any = await $fetch(
    `${apiPath}/seasons/${seasonId}?api_token=${apiKey}&include=${includeQuery}`
  );
  return response.data;
};

// const include = stats,stats.mostcleansheetsteam,stats.mostcleansheetsgoalkeeper,stats.mostgoalsteam,stats.mostgoalspermatchteam,stats.mostconcededgoalsteam,stats.mostcornersteam,goalscorers:limit(10|1).player.team,assistscorers:limit(10|1).player.team,cardscorers:limit(10|1).player.team
