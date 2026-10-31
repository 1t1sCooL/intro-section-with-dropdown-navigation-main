import { useEffect, useRef } from "react";
import { companyItems, featureItems } from "@/shared/config/navigation";
import { asset } from "@/shared/lib/asset";
import { useNav } from "../model/NavProvider";
import { Chevron } from "./Chevron";
import { NavLinks } from "./NavLinks";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input",
  "select",
  "textarea",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export const MobileMenu = () => {
  const { state, closeMobile, toggleMobile } = useNav();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!state.mobileOpen) return undefined;
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobile();
        return;
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = [...panel.querySelectorAll<HTMLElement>(focusableSelector)].filter(
        (node) => !node.hasAttribute("hidden") && node.closest("[hidden]") === null,
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [state.mobileOpen, closeMobile]);

  if (!state.mobileOpen) return null;

  return (
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
      <button type="button" className="mobile-menu__overlay" aria-label="Dismiss menu" onClick={closeMobile} />
      <div id="mobile-menu" className="mobile-menu__panel" ref={panelRef}>
        <button
          ref={closeRef}
          type="button"
          className="mobile-menu__close"
          aria-label="Close menu"
          onClick={closeMobile}
        >
          <img src={asset("images/icon-close-menu.svg")} alt="" width={26} height={26} />
        </button>
        <ul className="mobile-nav">
          <li>
            <button
              type="button"
              className="nav-trigger"
              aria-expanded={state.mobileExpanded.features}
              aria-controls="mobile-features-menu"
              onClick={() => toggleMobile("features")}
            >
              Features
              <Chevron open={state.mobileExpanded.features} />
            </button>
            <NavLinks
              id="mobile-features-menu"
              items={featureItems}
              hidden={!state.mobileExpanded.features}
              className="mobile-sub"
            />
          </li>
          <li>
            <button
              type="button"
              className="nav-trigger"
              aria-expanded={state.mobileExpanded.company}
              aria-controls="mobile-company-menu"
              onClick={() => toggleMobile("company")}
            >
              Company
              <Chevron open={state.mobileExpanded.company} />
            </button>
            <NavLinks
              id="mobile-company-menu"
              items={companyItems}
              hidden={!state.mobileExpanded.company}
              className="mobile-sub"
            />
          </li>
          <li>
            <a className="nav-link" href="#careers">
              Careers
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
        </ul>
        <div className="mobile-menu__actions">
          <a className="login" href="#login">
            Login
          </a>
          <a className="register" href="#register">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};
