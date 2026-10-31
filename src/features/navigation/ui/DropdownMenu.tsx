import type { NavItem } from "@/shared/config/navigation";
import { Chevron } from "./Chevron";
import { NavLinks } from "./NavLinks";

type DropdownMenuProps = {
  id: string;
  label: string;
  open: boolean;
  items: readonly NavItem[];
  onToggle: () => void;
};

export const DropdownMenu = ({ id, label, open, items, onToggle }: DropdownMenuProps) => {
  const panelId = `${id}-menu`;

  return (
    <div className={`dropdown-menu dropdown-menu--${id}`}>
      <button
        type="button"
        className="nav-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {label}
        <Chevron open={open} />
      </button>
      <NavLinks id={panelId} items={items} hidden={!open} className="dropdown" />
    </div>
  );
};
