import { Menu } from "@headlessui/react";
import { menuData } from "../Nav/navMenuData";
import { Phone } from "lucide-react";
import "./MobileMenu.scss";
function MobileMenu() {
  const brown = "hsl(32, 80%, 30%)";
  return (
    <>
      {menuData.map((menuItem) => {
        return (
          <Menu.Item key={menuItem.id}>
            {({ active }) => (
              menuItem.link ? (
                <a href={menuItem.link} className="nav__item">
                  <p className={`nav__item-text ${active ? "is-active" : ""}`}>{menuItem.title}</p>
                </a>
              ) : (
                <button className={`nav__item  ${menuItem.class ? menuItem.class : ""}`}>
                  {menuItem.class === "phone" ? (
                    <div className="nav__phoneWrapper">
                      <Phone size={24} color={brown} />
                      <p
                        className={`nav__item-text ${
                          active && !menuItem.class ? "is-active" : ""
                        } ${menuItem.class ? menuItem.class : ""}`}
                      >
                        {menuItem.title}
                      </p>
                    </div>
                  ) : (
                    <p
                      className={`nav__item-text ${
                        active && !menuItem.class ? "is-active" : ""
                      } ${menuItem.class ? menuItem.class : ""}`}
                    >
                      {menuItem.title}
                    </p>
                  )}
                </button>
              )
            )}
          </Menu.Item>
        );
      })}
    </>
  );
}

export default MobileMenu;
