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
          menuItem.class === "phone" ? (
            <Phone size={22} aria-label={menuItem.title} />
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
