import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import MobileMenu from "@components/Nav/components/MobileMenu/MobileMenu";
import useWidth from "@hooks/useWidth";
import LargerMenu from "@components/Nav/components/LargerMenu/LargerMenu";
import "./Nav.scss";

const logoSrc = `${import.meta.env.BASE_URL}assets/images/logo.png`;
const brown = "hsl(32, 80%, 30%)";

function Nav() {
  const width = useWidth();

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav__inner">
        <Link className="nav__brand" to="/" aria-label="Sweet & Savoury — home">
          <img
            className="nav__logo"
            src={logoSrc}
            alt="Sweet & Savoury — South African pies"
            width="200"
            height="80"
          />
        </Link>

        {width <= 767 && (
          <Menu as="div" className="nav__dropdown">
            {({ open }) => (
              <>
                <Menu.Button
                  className={`nav__button ${open ? "is-open" : ""}`}
                  aria-label={open ? "Close menu" : "Open menu"}
                >
                  {open ? (
                    <XIcon size={36} color={brown} />
                  ) : (
                    <MenuIcon size={36} color={brown} />
                  )}
                </Menu.Button>

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
                    <MobileMenu />
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        )}

        {width >= 768 && <LargerMenu />}
      </div>
    </nav>
  );
}

export default Nav;