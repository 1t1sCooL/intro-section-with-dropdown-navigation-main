import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, type LinksFunction } from "react-router";
import font500 from "@/shared/assets/fonts/epilogue-latin-500-normal.woff2?url";
import font700 from "@/shared/assets/fonts/epilogue-latin-700-normal.woff2?url";
import { asset } from "@/shared/lib/asset";
import "@/app/styles/global.css";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: asset("images/favicon-32x32.png"),
    type: "image/png",
    sizes: "32x32",
  },
  {
    rel: "preload",
    href: font500,
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: font700,
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
];

export const Layout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>
);

const App = () => <Outlet />;

export default App;
