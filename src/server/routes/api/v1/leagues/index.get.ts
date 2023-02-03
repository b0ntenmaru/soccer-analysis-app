import { getAllLeague } from '~~/src/server/utils/getAllLeague';

export default defineEventHandler(async () => {
  const data = await getAllLeague();
  return data;
});
