import { clientLogos } from "@/shared/config/navigation";
import { asset } from "@/shared/lib/asset";
import "./HeroSection.css";

export const HeroSection = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="hero__copy">
      <h1 className="hero__title" id="hero-title">
        Make
        <br className="hero__break" /> <span className="hero__line">remote work</span>
      </h1>
      <p className="hero__text">
        Get your team in sync, no matter your location. Streamline processes, create team rituals, and
        watch productivity soar.
      </p>
      <a className="cta" id="learn-more" href="#learn-more">
        Learn more
      </a>
      <ul className="clients" aria-label="Clients">
        {clientLogos.map((logo) => (
          <li key={logo.id}>
            <img
              className={`client--${logo.id}`}
              src={asset(logo.src)}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
            />
          </li>
        ))}
      </ul>
    </div>
    <picture className="hero__picture">
      <source media="(max-width: 79.9375em)" srcSet={asset("images/image-hero-mobile.png")} />
      <img
        className="hero__image"
        src={asset("images/image-hero-desktop.png")}
        alt=""
        width={960}
        height={1280}
        fetchPriority="high"
      />
    </picture>
  </section>
);
