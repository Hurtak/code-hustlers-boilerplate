import { add } from "./main.ts";
import { assertEquals } from "@std/assert";
import { assertSnapshot } from "@std/testing/snapshot";
import { describe, test } from "@std/testing/bdd";

Deno.test("test 1", () => {
  assertEquals(add(1, 2), 3);
});

describe("add", () => {
  test("result", () => {
    assertEquals(add(1, 2), 3);
  });

  test("object", () => {
    assertEquals({ a: 1 }, { a: 1 });
  });
});

test("snapshot", async (t) => {
  await assertSnapshot(t, add(1, 2));
});
