import "./Main.scss";
import Button from "../ui/components/button/Button";

function Main() {
  const heroBg = `${import.meta.env.BASE_URL}assets/images/hero.jpg`;
  const saFlagSrc = `${import.meta.env.BASE_URL}assets/images/SA-flag.png`;

  return (
    <main>
      <section
        className="hero"
        aria-labelledby="hero-title"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero__overlay" aria-hidden="true" />

        <div className="hero__inner">
          <Button variant="outline-orange">
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
              />
            </h1>

            <p className="hero__description">
              From golden-crusted fruit pies to hearty savory classics, every
              pie is made fresh daily with locally-sourced ingredients and
              generations of baking expertise.
            </p>
          </div>
          <div className="hero__btnContainer">
            <Button variant="primary" size="reg">
              <span className="hero__btn-text">Explore Our Menu</span>
            </Button>
            <Button variant="white-outline" size="reg">
              Order for Pickup
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
