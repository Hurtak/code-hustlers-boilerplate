import { zValidator } from "npm:@hono/zod-validator";
import { z } from "npm:zod";
import { Hono } from "npm:hono";

const app = new Hono();

app.get("/health-check", (c) => {
  return c.text("OK", 200);
});

app.post(
  "/hello",
  zValidator(
    "query",
    z.object({
      name: z.string(),
    }),
  ),
  (c) => {
    const { name } = c.req.valid("query");

    return c.json({
      message: `Hello ${name}!`,
    });
  },
);

Deno.serve({ port: 8001 }, app.fetch);
