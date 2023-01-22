import { createUsersMock } from '@/mocks/users'
import { createLeagueListDataMock } from '~~/mocks/leagueList/createLeagueListDataMock';

export const handlers = [
  createUsersMock(),
  createLeagueListDataMock(),
];
