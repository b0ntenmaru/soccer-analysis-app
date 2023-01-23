import { createUsersMock } from '@/mocks/users'
import { createLeagueListDataMock } from '~~/mocks/leagueList/createLeagueListDataMock';
import { createLeagueStatsDataMock } from '@/mocks/leagueStats/createLeagueStatsDataMock';

export const handlers = [
  createUsersMock(),
  createLeagueListDataMock(),
  createLeagueStatsDataMock(),
];
