import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { menuData } from "./navMenuData";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import "./Nav.scss";

const logoSrc = `${import.meta.env.BASE_URL}assets/images/logo.png`;
const brown = "hsl(32, 80%, 30%)";

function Nav() {
  return (
    <nav className="nav">
      <a className="nav__brand" href="/" aria-label="Sweet & Savory Home">
        <img className="nav__logo" src={logoSrc} alt="Sweet & Savory logo" />
      </a>

      <Menu as="div" className="nav__dropdown">
        {({ open }) => (
          <>
            {/* Trigger */}
            <Menu.Button className={`nav__button ${open ? "is-open" : ""}`}>
              {open ? <XIcon size={36} color={brown}/> : <MenuIcon size={36} color={brown} />}
            </Menu.Button>

            {/* Dropdown panel + animation */}
            <Transition
              as={Fragment}
              enter="dd-enter"
              enterFrom="dd-enterFrom"
              enterTo="dd-enterTo"
              leave="dd-leave"
              leaveFrom="dd-leaveFrom"
              leaveTo="dd-leaveTo"
            >
              <Menu.Items className="nav__menu">
              <MobileMenu/>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </nav>
  );
}

export default Nav;