import { hello } from "../hello";

test("returns correct greeting check", () => {
  expect(hello("World")).toBe("Hello, World!");
});