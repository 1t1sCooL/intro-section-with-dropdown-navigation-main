import type { MenuId } from "@/shared/config/navigation";

export type NavState = {
  desktopOpen: MenuId | null;
  mobileOpen: boolean;
  mobileExpanded: Readonly<Record<MenuId, boolean>>;
};

const collapsedSections = (): NavState["mobileExpanded"] => ({
  features: false,
  company: false,
});

export const initialNavState: NavState = {
  desktopOpen: null,
  mobileOpen: false,
  mobileExpanded: collapsedSections(),
};

export const toggleDesktopMenu = (state: NavState, id: MenuId): NavState => ({
  ...state,
  desktopOpen: state.desktopOpen === id ? null : id,
});

export const closeDesktopMenu = (state: NavState): NavState => ({
  ...state,
  desktopOpen: null,
});

export const openMobileMenu = (state: NavState): NavState => ({
  ...state,
  desktopOpen: null,
  mobileOpen: true,
});

export const closeMobileMenu = (state: NavState): NavState => ({
  ...state,
  mobileOpen: false,
  mobileExpanded: collapsedSections(),
});

export const toggleMobileSection = (state: NavState, id: MenuId): NavState => ({
  ...state,
  mobileExpanded: {
    ...state.mobileExpanded,
    [id]: !state.mobileExpanded[id],
  },
});
