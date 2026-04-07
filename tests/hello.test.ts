import { hello } from "../src/hello";

describe("hello function", () => {
  it("should return greeting message", () => {
    expect(hello("World")).toBe("Hello, World!");
  });
});