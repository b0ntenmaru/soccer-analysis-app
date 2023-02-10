import { useSportmonksApi } from '@@/src/server/utils/useSportmonksApi';
import type { GetFixturesByData } from '@@/src/server/utils/responseTypes/GetFixturesByData';

const { apiPath, apiKey } = useSportmonksApi();

type SelectedDate = `${string}-${string}-${string}`;

const getFixturesByDatePath = (selectedDate: SelectedDate) => {
  return `${apiPath}/fixtures/date/${selectedDate}?api_token=${apiKey}&include=localTeam,visitorTeam,league`;
};

export const getFixturesByDate = async (date: SelectedDate): Promise<GetFixturesByData> => {
  const response: any = await $fetch(getFixturesByDatePath(date));
  return response.data;
};
