import { describe, expect, it } from "vitest";
import {
  closeDesktopMenu,
  closeMobileMenu,
  initialNavState,
  openMobileMenu,
  toggleDesktopMenu,
  toggleMobileSection,
} from "./navState";

describe("navState", () => {
  it("starts with every menu closed", () => {
    expect(initialNavState).toEqual({
      desktopOpen: null,
      mobileOpen: false,
      mobileExpanded: { features: false, company: false },
    });
  });

  it("opens one desktop menu and closes it on the second toggle", () => {
    const opened = toggleDesktopMenu(initialNavState, "features");
    expect(opened.desktopOpen).toBe("features");
    expect(toggleDesktopMenu(opened, "features").desktopOpen).toBeNull();
  });

  it("keeps a single desktop menu open", () => {
    const features = toggleDesktopMenu(initialNavState, "features");
    const company = toggleDesktopMenu(features, "company");
    expect(company.desktopOpen).toBe("company");
  });

  it("closes the desktop menu without touching the mobile drawer", () => {
    const opened = toggleDesktopMenu(initialNavState, "company");
    expect(closeDesktopMenu(opened).desktopOpen).toBeNull();
  });

  it("opens the mobile drawer and drops any desktop menu", () => {
    const desktop = toggleDesktopMenu(initialNavState, "features");
    const mobile = openMobileMenu(desktop);
    expect(mobile.mobileOpen).toBe(true);
    expect(mobile.desktopOpen).toBeNull();
  });

  it("lets both mobile sections stay open at once", () => {
    const features = toggleMobileSection(initialNavState, "features");
    const both = toggleMobileSection(features, "company");
    expect(both.mobileExpanded).toEqual({ features: true, company: true });
  });

  it("resets mobile sections when the drawer closes", () => {
    const opened = toggleMobileSection(openMobileMenu(initialNavState), "features");
    expect(closeMobileMenu(opened)).toMatchObject({
      mobileOpen: false,
      mobileExpanded: { features: false, company: false },
    });
  });
});
