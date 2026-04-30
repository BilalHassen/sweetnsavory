import "./SubMenu.scss";
import { Phone } from "lucide-react";

function SubMenu({ data, variant }) {
  return (
    <div className="nav__largeMenu">
      {data.map((menuItem) => {
        const className = `nav__largeMenu-item ${
          variant && menuItem.class !== "phone" ? "orderBtn" : ""
        } ${menuItem.class ? menuItem.class : ""}`;

        const inner =
          variant && menuItem.class === "phone" ? (
            <div className={`nav__largeMenu-box`}>
              <Phone size={24} color="brown" />
              <p className="nav__largeMenu-text">{menuItem.title}</p>
            </div>
          ) : (
            <p className="nav__largeMenu-text">{menuItem.title}</p>
          );

        if (menuItem.link) {
          return (
            <a key={menuItem.id} href={menuItem.link} className={className}>
              {inner}
            </a>
          );
        }

        return (
          <button key={menuItem.id} className={className}>
            {inner}
          </button>
        );
      })}
    </div>
  );
}

export default SubMenu;
