import type { NavItem } from "@/shared/config/navigation";
import { asset } from "@/shared/lib/asset";

type NavLinksProps = {
  id: string;
  items: readonly NavItem[];
  hidden?: boolean;
  className: string;
};

export const NavLinks = ({ id, items, hidden = false, className }: NavLinksProps) => (
  <ul id={id} className={className} hidden={hidden}>
    {items.map((item) => (
      <li key={item.id}>
        <a className="nav-links__link" href={`#${item.id}`}>
          {item.icon ? (
            <img
              className="nav-links__icon"
              src={asset(item.icon)}
              alt=""
              width={item.iconWidth}
              height={item.iconHeight}
            />
          ) : null}
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);
