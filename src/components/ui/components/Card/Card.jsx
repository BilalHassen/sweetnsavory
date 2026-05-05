import Button from "@/components/ui/components/Button/Button";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ name, description, img, category, price, onAddToCart, slug }) {
  const isSweet = category === "sweet";
  const ctaLabel = isSweet ? "View Treat" : "View Pie";
  const badgeLabel = isSweet ? "Sweet" : "Savoury";

  return (
    <article className="card">
      {/* role="img" + aria-label give the CSS background-image meaningful alt text for screen readers. */}
      <div
        className="card__imgContainer"
        style={{ "--card-img": `url(${img})` }}
        role="img"
        aria-label={`Photo of ${name}`}
      >
        <Button as="span" variant={isSweet ? "green" : "primary"} size={"small"}>
          <span className="card__btn-text">{badgeLabel}</span>
        </Button>
      </div>
      <div className="card__textContainer">
        <div className="card__flexContainer">
          <h3 className="card__title">{name}</h3>
          <p className="card__price" aria-label={`Price ${price} Canadian dollars`}>{`$${price}`}</p>
        </div>
        <p className="card__description">{description}</p>
        {slug && (
          <Link
            className="card__addToCart"
            to={`/pies/${slug}`}
            aria-label={`${ctaLabel}: ${name}`}
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </article>
  );
}

export default Card;
