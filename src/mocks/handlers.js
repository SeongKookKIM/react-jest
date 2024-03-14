import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: "청소", completed: true },
        { id: 2, title: "설거지", completed: true },
        { id: 3, title: "숙제", completed: true },
      ])
    );
  }),
];
