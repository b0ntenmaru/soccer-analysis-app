import { rest } from 'msw';
import { leagueStatsData } from '@/mocks/leagueStats/leagueStatsDataMock';

export const createLeagueStatsDataMock = () => {
  return rest.get('https://api.football-data-api.com/league-season?season_id=:search_id', (_, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json(leagueStatsData)
    );
  });
}
