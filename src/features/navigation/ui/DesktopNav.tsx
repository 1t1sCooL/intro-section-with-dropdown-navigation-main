import { companyItems, featureItems } from "@/shared/config/navigation";
import { useNav } from "../model/NavProvider";
import { DropdownMenu } from "./DropdownMenu";

export const DesktopNav = () => {
  const { state, toggleDesktop } = useNav();

  return (
    <nav className="desktop-nav" aria-label="Primary" data-desktop-nav="">
      <ul className="desktop-nav__list">
        <li>
          <DropdownMenu
            id="features"
            label="Features"
            open={state.desktopOpen === "features"}
            items={featureItems}
            onToggle={() => toggleDesktop("features")}
          />
        </li>
        <li>
          <DropdownMenu
            id="company"
            label="Company"
            open={state.desktopOpen === "company"}
            items={companyItems}
            onToggle={() => toggleDesktop("company")}
          />
        </li>
        <li>
          <a className="nav-link" id="careers" href="#careers">
            Careers
          </a>
        </li>
        <li>
          <a className="nav-link" id="about" href="#about">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
