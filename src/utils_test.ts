import { assertEquals } from "@std/assert";
import { describe, test } from "@std/testing/bdd";

import { add } from "./utils.ts";

describe("add", () => {
  test("adds numbers", () => {
    assertEquals(add(1, 1), 2);
  });

  test("adds negative numbers", () => {
    assertEquals(add(2, -4), -2);
  });
});
