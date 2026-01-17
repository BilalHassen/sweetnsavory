import "./Footer.scss";
import SectionHeader from "@/components/ui/components/SectionHeader/SectionHeader";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { menuData } from "../../../components/Nav/navMenuData";
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
          ></SectionHeader>
          <div className="footer__socials" aria-label="Social links">
            <a
              className="footer__socialLink"
              href="https://www.facebook.com"
              // open link in a net tab
              target="_blank"
              rel="noreferrer"
              // accessible name for screen readers
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
          </div>
        </div>

        <nav className="footer__nav">
          <p className="footer__title">Quick Links</p>
          <ul className="footer__list">
            {footerMenu.map((item) => (
              <li className="footer__link" key={item.id}>
                <a className="footer__link" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer__list">
          <p className="footer__title">Contact</p>
          <li className="footer__link">140 Adeilaide St East</li>

          <li className="footer__link">Toronto, ON</li>
          <li className="footer__link">(647) 687-7841</li>
          <li className="footer__link">sweet&savoury@gmail.com</li>
        </ul>

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
