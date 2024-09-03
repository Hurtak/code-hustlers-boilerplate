import { z } from "npm:zod";

export const config = z
  .object({
    PORT: z.coerce.number(),
  })
  .parse({
    PORT: Deno.env.get("PORT"),
  });
