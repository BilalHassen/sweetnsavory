import React from "react";
import "./CardStructure.scss";

function CardStructure({ Icon, title, info, className = "" }) {
  return (
    <div className={["cardStructure__item", className].filter(Boolean).join(" ")}>
      {/* aria-hidden: decorative icon, the title/info text already conveys meaning */}
      <span className="cardStructure__iconContainer" aria-hidden="true">
        {Icon ? <Icon className="cardStructure__icon" /> : null}
      </span>
      <div className="cardStructure__text">
        <h3 className="cardStructure__header">{title}</h3>
        <p className="cardStructure__description">{info}</p>
      </div>
    </div>
  );
}

export default CardStructure;
