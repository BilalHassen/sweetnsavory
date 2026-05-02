import React from "react";
import Button from "@/components/ui/components/Button/Button";
import "./Card.scss";
import { useParams, Link } from "react-router-dom";
function Card({ name, description, img, category, price, onAddToCart, slug}) {



  const btnVariant = category === "sweet" ? "green" : "primary";

  return (
    <article className="card">
      {/* role="img": tells screen readers this div is an image (needed for CSS background-images) */}
      {/* aria-label: the alt text screen readers announce since there's no actual <img> */}
      <div
        className="card__imgContainer"
        style={{ "--card-img": `url(${img})` }}
        role="img"
        aria-label={`Photo of ${name}`}
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
        {onAddToCart && (
          <Link className="card__addToCartLink" to={`/pies/${slug}`}>
            <button className="card__addToCart">View Pie</button>
          </Link>
        )}
      </div>
    </article>
  );
}

export default Card;
