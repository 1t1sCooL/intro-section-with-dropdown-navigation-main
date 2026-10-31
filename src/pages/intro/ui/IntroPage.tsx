import { NavProvider } from "@/features/navigation/model/NavProvider";
import { HeroSection } from "@/widgets/hero/ui/HeroSection";
import { SiteFooter } from "@/widgets/site-footer/ui/SiteFooter";
import { SiteHeader } from "@/widgets/header/ui/SiteHeader";

export const IntroPage = () => (
  <NavProvider>
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="stage">
        <SiteHeader />
        <main id="main">
          <HeroSection />
        </main>
      </div>
      <SiteFooter />
    </div>
  </NavProvider>
);
