import "./SiteFooter.css";

const link = (href: string, text: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

export const SiteFooter = () => (
  <footer className="site-footer">
    <p className="site-footer__credit">
      Challenge by {link("https://www.frontendmentor.io?ref=challenge", "Frontend Mentor")}. Coded by{" "}
      {link("https://mmalabugin.ru/", "1t1sCooL")}.
    </p>
  </footer>
);
