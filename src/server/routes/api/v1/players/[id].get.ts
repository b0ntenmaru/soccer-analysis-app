import { getPlayerById } from '@@/src/server/utils/getPlayerById';

export default defineEventHandler(async (event) => {
  const playerId = event.context.params.id;
  const data = await getPlayerById({ playerId, include: ['position', 'country'] });
  return data;
});
