import React from "react";
import "./SectionHeader.scss";

function SectionHeader({
  eyebrow,          // small label (e.g., "OUR MENU")
  title,            // main heading (e.g., "Discover Our Pies")
  description,      // paragraph under title
  align = "center", // "center" | "left"
  as: TitleTag = "h2", // heading tag: h1/h2/h3 etc.
  className = "",
}) {
  return (
    <header className={`sectionHeader sectionHeader--${align} ${className}`}>
      {eyebrow && <p className="sectionHeader__eyebrow">{eyebrow}</p>}

      {title && (
        <TitleTag className="sectionHeader__title">
          {title}
        </TitleTag>
      )}

      {description && (
        <p className="sectionHeader__description">{description}</p>
      )}
    </header>
  );
}

export default SectionHeader;
