import { rest } from "msw";
import { mockLeagueListData } from '@/mocks/leagueList/leagueListDataMock';

export const createLeagueListDataMock = () => {
  return rest.get("https://api.football-data-api.com/league-list", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockLeagueListData)
    );
  });
}
