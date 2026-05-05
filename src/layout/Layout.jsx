import Nav from "@components/Nav/Nav";

import "./Layout.scss";

function Layout({ children, fullBleed }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Nav />
      <main id="main" tabIndex={-1}>
        {fullBleed}
        <div className="layout">
          <div className="layout__wrapper">{children}</div>
        </div>
      </main>
    </>
  );
}

export default Layout;
