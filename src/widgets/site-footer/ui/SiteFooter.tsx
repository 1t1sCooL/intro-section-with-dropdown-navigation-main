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
    <nav className="site-footer__links" aria-label="Author links">
      {link("https://mmalabugin.ru/", "Website")}
      {link("https://www.frontendmentor.io/profile/1t1sCooL", "Frontend Mentor")}
      {link("https://www.twitter.com/vi_el_mar", "Twitter")}
      {link("https://t.me/ItIsCooL", "Telegram")}
    </nav>
  </footer>
);
