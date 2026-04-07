import { hello } from "../hello";

test("returns correct greeting", () => {
  expect(hello("World")).toBe("Hello, World!");
});