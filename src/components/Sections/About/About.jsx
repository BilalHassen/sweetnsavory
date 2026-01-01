import React from "react";
import "./About.scss";
const aboutImg = `${import.meta.env.BASE_URL}assets/images/about.png`;
import { aboutItems } from "./AboutData";

function About() {

  console.log(aboutItems)

  return (
    <section className="about">
      <img className="about__img" src={aboutImg} alt="About Sweet & Savoury" />
      <div className="about__textContainer">
      <h2 className="about__title">
        Baking Traditions,<br/>
        <span className="about__subTitle">Creating Memories</span>
      </h2>
      <p className="about__description">
        What started as a small family kitchen grew from a simple idea: make
        honest, great-tasting pastries the way we grew up enjoying them.
        Inspired by South African home cooking, our shop is built on tradition,
        patience, and doing things properly, no shortcuts. <br/>Every pie is still
        made with care, from our rich, flaky pastry to our boldly seasoned
        savoury fillings and comforting sweet classics. It’s food meant to be
        shared, enjoyed, and remembered just like back home.
      </p>
      </div>
      <div className="about__container">

        {aboutItems.map((item)=>{
          const Icon = item.Icon
          return <div className="about__item">
          <span className="about__iconContainer">
            <Icon className="about__icon"/>
          </span>
          <div className="about__text">
            <h3 className="about__header">{item.title}</h3>
            <p className="about__description">
              {item.description}
            </p>
          </div>
        </div>
        })}


  {/* <div className="about__item">
    <span className="about__icon">
      <FaHeart />
    </span>
    <div className="about__text">
      <h3>Made with Love</h3>
      <p>
        Every pie is handcrafted with care, using time-honoured techniques and
        family recipes.
      </p>
    </div>
  </div> */}

  
</div>

    </section>
  );
}

export default About;
