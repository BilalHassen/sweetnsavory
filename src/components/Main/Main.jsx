import "./Main.scss";
import Button from "../ui/components/button/Button";
function Main() {
  const heroBg = `${import.meta.env.BASE_URL}assets/images/hero.jpg`;
  return (
    <main>
      <section
        className="hero"
        aria-labelledby="hero-title"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero__overlay" aria-hidden="true"></div>
        <Button className="hero__btn" variant="ghost" size="sm">
          <span className="hero__btn-text">Hand Crafted with Love since 1997</span>
        </Button>

        <div className="hero__contentBox">
          <h1 className="hero__title">
            SweetNSavoury <br />
            <span className="hero__subTitle">South African Pies</span>
          </h1>
          <p className="hero__description">
            From golden-crusted fruit pies to hearty savory classics, every pie
            is made fresh daily with locally-sourced ingredients and generations
            of baking expertise.
          </p>
          <div className="hero__btnContainer">
            <Button variant="primary" size="md">Explore Our Menu</Button>
            <Button className="hero__order-btn" variant="outline" size="md">
              Order for Pickup
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
