import "./Main.scss";
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
  
        <div className="hero__container">
          <p className="hero__badge">Handcrafted with Love Since 1985</p>
  
          <h1 id="hero-title" className="hero__title">
            Sweet &amp; Savory<br />
            <span className="hero__titleAccent">Artisan Pies</span>
          </h1>
  
          <p className="hero__lead">
            From golden-crusted fruit pies to hearty savory classics, every pie is
            made fresh daily with locally-sourced ingredients and generations of
            baking expertise.
          </p>
  
          <div className="hero__actions">
            <a className="btn btn--primary" href="/menu">
              Explore Our Menu
            </a>
            <a className="btn btn--ghost" href="/order">
              Order for Pickup
            </a>
          </div>
  
          <dl className="hero__stats" aria-label="Business highlights">
            <div className="hero__stat">
              <dt>38+</dt>
              <dd>Years of Baking</dd>
            </div>
            <div className="hero__stat">
              <dt>50+</dt>
              <dd>Pie Varieties</dd>
            </div>
            <div className="hero__stat">
              <dt>1M+</dt>
              <dd>Pies Served</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  )
}

export default Main