import { rest } from "msw";

export const createUsersMock = () => {
  return rest.get("api/users", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          { id: 1, name: "hogehoge" },
          { id: 2, name: "fugafuga" },
          { id: 3, name: "piyopiyo" },
        ],
      })
    );
  });
}
