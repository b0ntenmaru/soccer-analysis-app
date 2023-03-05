import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { GetSeasonStatsByIdData } from 'src/types/response_types/GetSeasonStatsByIdData';

type StatsQuery = `stats.${string}`;

const { apiPath, apiKey } = useSportmonksApi();

const aggregatedGoalscorersQuery = 'aggregatedGoalscorers:limit(10|1).player.team';
const aggregatedAssistscorersQuery = 'aggregatedAssistscorers:limit(10|1).player.team';
const mostGoalsTeam: StatsQuery = 'stats.mostgoalsteam';
const mostGoalsPerMatchTeam: StatsQuery = 'stats.mostgoalspermatchteam';
const mostConcededGoalsTeam: StatsQuery = 'stats.mostconcededgoalsteam';
const mostgoalspermatchteam: StatsQuery = 'stats.mostgoalspermatchteam';
const mostcleansheetsteam: StatsQuery = 'stats.mostcleansheetsteam';
const mostCornersTeam: StatsQuery = 'stats.mostcornersteam';
const topScorer: StatsQuery = 'stats.topscorer';
const assistTopScorer: StatsQuery = 'stats.assisttopscorer';
const mostcleansheetsgoalkeeper: StatsQuery = 'stats.mostcleansheetsgoalkeeper';

const includeQuery = `stats,${aggregatedGoalscorersQuery},${aggregatedAssistscorersQuery},${mostGoalsTeam},${mostGoalsPerMatchTeam},${mostConcededGoalsTeam},${mostgoalspermatchteam},${mostcleansheetsteam},${mostCornersTeam},${topScorer},${assistTopScorer},${mostcleansheetsgoalkeeper}`;

export const getSeasonStatsById = async (args: { seasonId: number }): Promise<GetSeasonStatsByIdData> => {
  const { seasonId } = args;

  const response: any = await $fetch(
    `${apiPath}/seasons/${seasonId}?api_token=${apiKey}&include=${includeQuery}`
  );
  return response.data;
};

// const include = stats,stats.mostcleansheetsteam,stats.mostcleansheetsgoalkeeper,stats.mostgoalsteam,stats.mostgoalspermatchteam,stats.mostconcededgoalsteam,stats.mostcornersteam,goalscorers:limit(10|1).player.team,assistscorers:limit(10|1).player.team,cardscorers:limit(10|1).player.team
