import { rest } from "msw";
import { events, focus } from "./data";

const handlers = [
  rest.get("/events.json", (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ events, focus }))
  ),
];

export default handlers;
