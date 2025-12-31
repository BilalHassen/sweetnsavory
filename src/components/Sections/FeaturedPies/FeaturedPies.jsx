import React from "react";
import "./FeaturedPies.scss";
import { piesData } from "../../../data/data";
import Card from "./components/Card/Card";
import { Car } from "lucide-react";
function FeaturedPies() {
  const featuredPies = piesData.filter((pie) => pie.isFeatured);
  console.log(featuredPies);
  return (
    <section className="featured">
      <div className="layout__wrapper">
        <div className="featured__text-wrapper">
        <h2 className="featured__title">Featured Items</h2>
        <p className="featured__statment">
          From sweet to savory, each pie is crafted with premium ingredients and
          baked to golden perfection in our stone ovens.
        </p>
        </div>
        <ul className="featured__piesList">
          {featuredPies.map((pie, index) => (
            <li className="featured__pies" key={index}>
              <Card
                name={pie.name}
                description={pie.description}
                img={pie.img}
                category={pie.category}
                price={pie.price}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeaturedPies;

//TODO GET THE FEATURED PIES RENDERED PROPERLY IN THE LAYOUT
