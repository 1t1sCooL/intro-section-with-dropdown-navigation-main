import { useEffect, useRef } from "react";
import { MobileMenu } from "@/features/navigation/ui/MobileMenu";
import { DesktopNav } from "@/features/navigation/ui/DesktopNav";
import { useNav } from "@/features/navigation/model/NavProvider";
import { asset } from "@/shared/lib/asset";
import "./SiteHeader.css";
import "@/features/navigation/ui/navigation.css";

export const SiteHeader = () => {
  const nav = useNav();
  const burgerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (wasOpen.current && !nav.state.mobileOpen) burgerRef.current?.focus();
    wasOpen.current = nav.state.mobileOpen;
  }, [nav.state.mobileOpen]);

  return (
    <header className="header">
      <a className="logo" href="#main">
        <img src={asset("images/logo.svg")} alt="snap" width={84} height={27} />
      </a>
      <DesktopNav />
      <div className="header__actions">
        <a className="login" id="login" href="#login">
          Login
        </a>
        <a className="register" id="register" href="#register">
          Register
        </a>
      </div>
      <button
        ref={burgerRef}
        type="button"
        className="burger"
        aria-expanded={nav.state.mobileOpen}
        aria-controls="mobile-menu"
        onClick={nav.openMobile}
      >
        <img src={asset("images/icon-menu.svg")} alt="" width={32} height={18} />
        <span className="visually-hidden">Open menu</span>
      </button>
      <MobileMenu />
    </header>
  );
};
