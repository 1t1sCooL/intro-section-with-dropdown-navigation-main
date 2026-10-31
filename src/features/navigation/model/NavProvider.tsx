import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { MenuId } from "@/shared/config/navigation";
import {
  closeDesktopMenu,
  closeMobileMenu,
  initialNavState,
  openMobileMenu,
  toggleDesktopMenu,
  toggleMobileSection,
  type NavState,
} from "./navState";

type NavController = {
  state: NavState;
  toggleDesktop: (id: MenuId) => void;
  closeDesktop: () => void;
  openMobile: () => void;
  closeMobile: () => void;
  toggleMobile: (id: MenuId) => void;
};

const NavContext = createContext<NavController | null>(null);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(initialNavState);

  const toggleDesktop = useCallback((id: MenuId) => {
    setState((current) => toggleDesktopMenu(current, id));
  }, []);

  const closeDesktop = useCallback(() => {
    setState(closeDesktopMenu);
  }, []);

  const openMobile = useCallback(() => {
    setState(openMobileMenu);
  }, []);

  const closeMobile = useCallback(() => {
    setState(closeMobileMenu);
  }, []);

  const toggleMobile = useCallback((id: MenuId) => {
    setState((current) => toggleMobileSection(current, id));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-lock", state.mobileOpen);
    return () => {
      document.documentElement.classList.remove("nav-lock");
    };
  }, [state.mobileOpen]);

  useEffect(() => {
    if (state.desktopOpen === null) return undefined;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setState(closeDesktopMenu);
    };

    const onPointer = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("[data-desktop-nav]")) return;
      setState(closeDesktopMenu);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [state.desktopOpen]);

  return (
    <NavContext.Provider
      value={{ state, toggleDesktop, closeDesktop, openMobile, closeMobile, toggleMobile }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error("useNav must be used within NavProvider");
  return context;
};
