type ChevronProps = {
  open: boolean;
};

export const Chevron = ({ open }: ChevronProps) => (
  <svg
    className={open ? "chevron chevron--open" : "chevron"}
    width="10"
    height="6"
    viewBox="0 0 10 6"
    aria-hidden="true"
  >
    <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
