import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/layout/Layout.jsx";
import Footer from "@/components/Sections/Footer/Footer";
import Button from "@/components/ui/components/Button/Button";

function NotFound() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Page not found · Sweet & Savoury";

    const robots = document.head.querySelector('meta[name="robots"]');
    const previousRobots = robots?.getAttribute("content") ?? null;
    if (robots) robots.setAttribute("content", "noindex,follow");

    return () => {
      document.title = previousTitle;
      if (robots && previousRobots !== null) robots.setAttribute("content", previousRobots);
    };
  }, []);

  return (
    <>
      <Layout>
        <section
          className="notFound"
          aria-labelledby="notFound-title"
          style={{ padding: "8rem 2rem", textAlign: "center" }}
        >
          <h1 id="notFound-title" style={{ fontSize: "4rem", marginBottom: "1.6rem" }}>
            Page not found
          </h1>
          <p style={{ fontSize: "1.6rem", marginBottom: "2.4rem", maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
            We couldn’t find the page you’re looking for. Try heading back to our menu or the home page.
          </p>
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link to="/">
              <Button variant="primary" size="med">Go home</Button>
            </Link>
            <Link to="/#menu">
              <Button variant="green" size="med">View the menu</Button>
            </Link>
          </div>
        </section>
      </Layout>
      <Footer />
    </>
  );
}

export default NotFound;
