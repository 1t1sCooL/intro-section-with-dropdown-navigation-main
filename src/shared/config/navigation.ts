export type MenuId = "features" | "company";

export type NavItem = {
  id: string;
  label: string;
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
};

export const featureItems: readonly NavItem[] = [
  {
    id: "todo-list",
    label: "Todo List",
    icon: "images/icon-todo.svg",
    iconWidth: 14,
    iconHeight: 16,
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: "images/icon-calendar.svg",
    iconWidth: 16,
    iconHeight: 16,
  },
  {
    id: "reminders",
    label: "Reminders",
    icon: "images/icon-reminders.svg",
    iconWidth: 13,
    iconHeight: 17,
  },
  {
    id: "planning",
    label: "Planning",
    icon: "images/icon-planning.svg",
    iconWidth: 16,
    iconHeight: 16,
  },
];

export const companyItems: readonly NavItem[] = [
  { id: "history", label: "History" },
  { id: "our-team", label: "Our Team" },
  { id: "blog", label: "Blog" },
];

export type ClientLogo = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
};

export const clientLogos: readonly ClientLogo[] = [
  { id: "databiz", name: "Databiz", src: "images/client-databiz.svg", width: 114, height: 20 },
  { id: "audiophile", name: "Audiophile", src: "images/client-audiophile.svg", width: 73, height: 36 },
  { id: "meet", name: "Meet", src: "images/client-meet.svg", width: 90, height: 20 },
  { id: "maker", name: "Maker", src: "images/client-maker.svg", width: 83, height: 24 },
];
