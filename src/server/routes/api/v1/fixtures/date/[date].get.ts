import { getFixturesByDate } from '@@/src/server/utils/getFixturesByDate';

export default defineEventHandler(async (event) => {
  const selectedDate = event.context.params.date;

  const data = await getFixturesByDate(selectedDate);
  return data;
});
