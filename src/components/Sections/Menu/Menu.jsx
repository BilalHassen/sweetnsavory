import React, { useState } from "react";
import InfoCard from "@/components/ui/components/InfoCard/InfoCard";
import SectionHeader from "@/components/ui/components/SectionHeader/SectionHeader";
import Button from "@/components/ui/components/button/Button";
import "./Menu.scss";
import { piesData } from "@/data/data";

function Menu() {
  const [selectedValue, setSelectedValue] = useState("savoury");

  function handleSelection(value) {
    if (value === "savoury") {
      setSelectedValue("savoury");
    } else if (value === "sweet") {
      setSelectedValue("sweet");
    }
  }

  const savouryMenu = piesData.filter((pies) => pies.category === "savoury");
  const sweetMenu = piesData.filter((pies) => pies.category === "sweet");

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
          identity={"savoury"}
          selectedValue={selectedValue}
          onClick={() => handleSelection("savoury")}
        >
          <span className="menu__btnText">Savoury</span>
        </Button>
        <Button
          variant={"green"}
          size={"med"}
          identity={"sweet"}
          selectedValue={selectedValue}
          onClick={() => handleSelection("sweet")}
        >
          <span className="menu__btnText">Sweets</span>
        </Button>
      </div>
      </div>
      <div className="menu__container">
      <ul className="menu__itemsContainer">
      {activeMenu.map((item) => {
        return (
          <li key={item.name} className="menu__item">
            <InfoCard className="menu__card">
              <div className="menu__txtContainer">
                <h3 className="menu__itemName">{item.name}</h3>
                <p className="menu__price">${item.price}</p>
              </div>
              <p className="menu__ingredients">{item.ingredients}</p>
            </InfoCard>
          </li>
        );
      })}
       </ul>
      </div>
    </section>
  );
}

export default Menu;
