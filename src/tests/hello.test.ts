import { hello } from "../src/hello";

test("returns correct greeting", () => {
  expect(hello("World")).toBe("Hello, World!");
});