import { hello } from "../src/hello";

test("returns correct greeting check", () => {
  expect(hello("World")).toBe("Hello, World!");
});