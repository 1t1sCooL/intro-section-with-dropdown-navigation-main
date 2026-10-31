import { describe, expect, it } from "vitest";
import { asset } from "./asset";

describe("asset", () => {
  it("prefixes a public path with the Vite base", () => {
    expect(asset("images/logo.svg")).toBe(`${import.meta.env.BASE_URL}images/logo.svg`);
  });

  it("strips a leading slash so the base is not doubled", () => {
    expect(asset("/images/logo.svg")).toBe(`${import.meta.env.BASE_URL}images/logo.svg`);
  });
});
