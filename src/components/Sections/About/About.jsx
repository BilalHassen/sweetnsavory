import "./About.scss";
import { aboutItems } from "./AboutData";
import CardStructure from "@/components/ui/components/CardStructure/CardStructure";

// Fallback PNG must be a file that actually exists in /public/assets/images/
// (about.png was removed during asset cleanup)
const aboutImgFallbackPng = `${import.meta.env.BASE_URL}assets/images/about-larger.png`;
const aboutImgMobileAvif = `${import.meta.env.BASE_URL}assets/images/about-mobile.avif`;
const aboutImgLargeAvif = `${import.meta.env.BASE_URL}assets/images/about-lrg.avif`;
function About() {
  return (
    <section id="about" className="about">
      <picture className="about__media">
        <source
          type="image/avif"
          media="(min-width: 768px)"
          srcSet={aboutImgLargeAvif}
        />
        <source type="image/avif" srcSet={aboutImgMobileAvif} />
        <img
          className="about__img"
          src={aboutImgFallbackPng}
          alt="About Sweet & Savoury"
          loading="lazy"
          decoding="async"
          width="600"
          height="800"
        />
      </picture>

      <div className="about__flexContainer">
      <div className="about__textContainer">
      <h2 className="about__title">
        Baking Traditions,<br/>
        <span className="about__subTitle">Creating Memories</span>
      </h2>
      <p className="about__description1">
        What started as a small family kitchen grew from a simple idea: make
        honest, great-tasting pastries the way we grew up enjoying them.
        Inspired by South African home cooking, our shop is built on tradition,
        patience, and doing things properly, no shortcuts. <br className="about__br"/>Every pie is still
        made with care, from our rich, flaky pastry to our boldly seasoned
        savoury fillings and comforting sweet classics. It’s food meant to be
        shared, enjoyed, and remembered just like back home.
      </p>
      </div>
      <div className="about__container">

        {aboutItems.map((item) => (
          <CardStructure
            key={item.id}
            Icon={item.Icon}
            title={item.title}
            info={item.description}
          />
        ))}
        </div>


      </div>

    </section>
  );
}

export default About;
