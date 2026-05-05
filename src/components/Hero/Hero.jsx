import "./Hero.scss";
import Button from "../ui/components/Button/Button";

function Hero() {
  // Responsive hero images matching your mixin breakpoints
  const heroMobile = `${import.meta.env.BASE_URL}assets/images/hero-mobile.avif`;   // < 768px
  const heroTablet = `${import.meta.env.BASE_URL}assets/images/hero-tablet.avif`;   // 768px - 1365px
  const heroDesktop = `${import.meta.env.BASE_URL}assets/images/hero-desktop.avif`; // ≥ 1366px
  const heroWebp = `${import.meta.env.BASE_URL}assets/images/hero.webp`;            // fallback
  const saFlagSrc = `${import.meta.env.BASE_URL}assets/images/SA-flag.png`;

  return (
    <>
      {/* aria-labelledby: links this section to its heading so screen readers announce "home, Sweet&Savoury" */}
      <section id="home" className="hero" aria-labelledby="hero-title">
        {/* aria-hidden="true": hides decorative content from screen readers (they skip it) */}
        {/* 
          Responsive hero image (matches _mixins.scss breakpoints):
          - Mobile: < 768px (hero-mobile.avif)
          - Tablet: 768px - 1365px (hero-tablet.avif)
          - Desktop: ≥ 1366px (hero-desktop.avif)
          - Browser picks the first <source> whose media query matches
        */}
        <picture className="hero__bg" aria-hidden="true">
          {/* Mobile (< 768px) */}
          <source
            srcSet={heroMobile}
            type="image/avif"
            media="(max-width: 767px)"
          />
          {/* Tablet (768px - 1365px) */}
          <source
            srcSet={heroTablet}
            type="image/avif"
            media="(min-width: 768px) and (max-width: 1365px)"
          />
          {/* Desktop (≥ 1366px) */}
          <source
            srcSet={heroDesktop}
            type="image/avif"
            media="(min-width: 1366px)"
          />
          {/* Fallback: WebP for browsers without AVIF support */}
          <source srcSet={heroWebp} type="image/webp" />
          <img
            src={heroWebp}
            alt=""
            decoding="async"
            fetchPriority="high"
            loading="eager"
            width="1920"
            height="1080"
          />
        </picture>
        {/* aria-hidden: decorative overlay, screen readers skip it */}
        <div className="hero__overlay" aria-hidden="true" />
        <div className="layout__wrapper">
          <div className="hero__inner">
            {/* Decorative pill — not a button. Rendered as <span> to avoid
                announcing as an interactive element to assistive tech. */}
            <Button as="span" variant="outline-orange">
              <span className="hero__btn-text">
                Hand Crafted with Love since 1997
              </span>
            </Button>

            <div className="hero__contentBox">
              <h1 className="hero__title" id="hero-title">
                Sweet&Savoury <br />
                <span className="hero__subTitle">South African Pies</span>
                <img
                  className="hero__flag"
                  src={saFlagSrc}
                  alt="South African flag"
                  width="40"
                  height="27"
                />
              </h1>

              <p className="hero__description">
                Hearty savoury classics made fresh daily with locally-sourced
                ingredients and generations of baking expertise.
              </p>
            </div>
            <div className="hero__btnContainer">
              <Button variant="primary" size="small" href="/#menu">
                <span className="hero__btn-text">Order for Pickup</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
