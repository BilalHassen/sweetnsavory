import "./FeaturedPies.scss";
// Use alias import so moving this file won't break paths
import { piesData } from "@/data/data";
import Card from "./components/Card/Card";
import SectionHeader from "@/components/ui/components/SectionHeader/SectionHeader";
function FeaturedPies() {
  const featuredPies = piesData.filter((pie) => pie.isFeatured);
  return (
    <section id="pies" className="featured">
        <SectionHeader
          className="featured__header"
          title="Featured Items"
          description="From sweet to savory, each pie is crafted with premium ingredients and baked to golden perfection in our stone ovens."
          align="center"
          as="h2"
        />
      <div className="layout__wrapper">
      
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


