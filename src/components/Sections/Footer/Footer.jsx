import "./Footer.scss";
import SectionHeader from "@/components/ui/components/SectionHeader/SectionHeader";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { menuData } from "@/components/Nav/navMenuData";
import useWidth from "@hooks/useWidth";

function Footer() {
  const width = useWidth();
  const footerMenu = menuData.slice(0, 5);

  return (
    <footer className="footer">
      <div className="layout__wrapper layout__wrapper--footer footer__inner">
        <div className="footer__container1">
          <SectionHeader
            title={"Sweet & Savoury"}
            align="left"
            description={
              "Crafting delicious pies with love since 1985. Every pie tells a story of tradition, quality, and the simple joy of homemade baking."
            }
          />

          {/* aria-label: names this nav for screen readers ("Social links navigation") */}
          <nav className="footer__socials" aria-label="Social links">
            {/* aria-label on icon-only links: screen readers need text since there's no visible label */}
            <a
              className="footer__socialLink"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              className="footer__socialLink"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className="footer__socialLink"
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </nav>
        </div>

        <nav className="footer__nav" aria-label="Quick links">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__list">
            {footerMenu.map((item) => (
              <li className="footer__linkItem" key={item.id}>
                <a className="footer__link" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__list">
            <li className="footer__linkItem">140 Adeilaide St East</li>
            <li className="footer__linkItem">Toronto, ON</li>
            <li className="footer__linkItem">(647) 687-7841</li>
            <li className="footer__linkItem">sweet&savoury@gmail.com</li>
          </ul>
        </div>

        {width < 1366 && (
          <>
            <hr className="footer__divider" />
            <p className="footer__copyright">
              © 2026 Sweet & Savory Pie Shop. All rights reserved.
            </p>
          </>
        )}
      </div>

      {width >= 1366 && (
        <div className="footer__dividerContainer">
            <hr className="footer__divider" />
            <p className="footer__copyright">
              © 2026 Sweet & Savory Pie Shop. All rights reserved.
            </p>
        </div>
      )}

    </footer>
  );
}

export default Footer;
