import React, { useState } from "react";
import Card from "@/components/ui/components/Card/Card";
import SectionHeader from "@/components/ui/components/SectionHeader/SectionHeader";
import Button from "@/components/ui/components/Button/Button";
import "./Menu.scss";
import { piesData } from "@/data/data";
import { useShopifyCart, addToShopifyCart } from "@/hooks/useShopifyCart";

function Menu() {
  useShopifyCart()
  const [selectedValue, setSelectedValue] = useState("savoury");

  const savouryMenu = piesData.filter((pie) => pie.category === "savoury");
  const sweetMenu = piesData.filter((pie) => pie.category === "sweet");
  const activeMenu = selectedValue === "savoury" ? savouryMenu : sweetMenu;

  return (
    <section id="menu" className="menu">
      <SectionHeader
        eyebrow={"Our Menu"}
        title={"Discover Our Pies"}
        description={
          "All pies are available for in-store pickup, delivery, or dine-in. Call ahead for large orders and custom requests."
        }
      />
      <div className="menu__flexCon">
        <div className="menu__btnContainer">
          <Button
            variant={"primary"}
            size={"med"}
            fullWidth
            identity={"savoury"}
            selectedValue={selectedValue}
            onClick={() => setSelectedValue("savoury")}
          >
            <span className="btn__text">Savoury</span>
          </Button>
          <Button
            variant={"green"}
            size={"med"}
            fullWidth
            identity={"sweet"}
            selectedValue={selectedValue}
            onClick={() => setSelectedValue("sweet")}
          >
            <span className="btn__text">Sweets</span>
          </Button>
        </div>
      </div>
      <ul className="menu__grid">
        {activeMenu.map((item) => (
          <li key={item.name} className="menu__gridItem">
            <Card
              name={item.name}
              description={item.description}
              img={item.img}
              category={item.category}
              price={item.price}
              slug={item.slug}
              onAddToCart={() => addToShopifyCart(item.variantId)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Menu;
