import "./SubMenu.scss";
import { Phone } from "lucide-react";

function SubMenu({ data, variant }) {
  return (
    <div className="nav__largeMenu">
      {data.map((menuItem) => {
        return (
          <button
            key={menuItem.id}
            className={`nav__largeMenu-item ${
              variant && menuItem.class !== "phone" ? "orderBtn" : ""
            } ${menuItem.class ? menuItem.class : ""}`}
          >
            {variant && menuItem.class === "phone" ? (
              <div className={`nav__largeMenu-box`}>
                <Phone size={24} color="brown" />
                <p className="nav__largeMenu-text">{menuItem.title}</p>
              </div>
            ) : (
              <p className="nav__largeMenu-text">{menuItem.title}</p>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default SubMenu;
