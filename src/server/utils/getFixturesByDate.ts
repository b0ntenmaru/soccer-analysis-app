import { convertToLeagueFixtures } from './convertToLeagueFixtures';
import { LeagueFixtures } from '@@/src/types/entity/LeagueFixtures';
import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';

const { apiPath, apiKey } = useSportmonksApi();

type SelectedDate = `${string}-${string}-${string}`;

const getFixturesByDatePath = (selectedDate: SelectedDate) => {
  return `${apiPath}/fixtures/date/${selectedDate}?api_token=${apiKey}&include=localTeam,visitorTeam,league&leagues=2,5,8,24,72,82,301,384,390,564,570`;
};

export const getFixturesByDate = async (date: SelectedDate): Promise<LeagueFixtures> => {
  const response: any = await $fetch(getFixturesByDatePath(date));
  return convertToLeagueFixtures(response.data);
};
