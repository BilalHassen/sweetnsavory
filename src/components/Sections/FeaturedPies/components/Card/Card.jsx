import React from "react";
import Button from "@/components/ui/components/button/Button";
import "./Card.scss";
function Card({ name, description, img, category, price }) {
  // const cardBgImg = `${import.meta.env.BASE_URL}assets/images/img`;
  const btnVariant = category === "sweet" ? "primary" : "alternate";

  return (
    <article className="card">
      <div
        className="card__imgContainer"
        style={{ "--card-img": `url(${img})` }}
      >
        <Button variant={btnVariant} size={"small"}>
          <span className="card__btn-text">{category}</span>
        </Button>
      </div>
      <div className="card__textContainer">
        <div className="card__flexContainer">
        <h3 className="card__title">{name}</h3>
          <p className="card__price">{`$${price}`}</p>
        </div>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
}

export default Card;
