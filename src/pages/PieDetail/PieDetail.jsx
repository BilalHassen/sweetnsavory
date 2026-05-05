import { useEffect, useId, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { piesData } from "@/data/data";
import Layout from "@/layout/Layout.jsx";
import Footer from "@/components/Sections/Footer/Footer";
import Button from "@/components/ui/components/Button/Button";
import { useShopifyCart, addToShopifyCart } from "@/hooks/useShopifyCart";
import { useWidth } from "@/hooks/useWidth";
import "./PieDetail.scss";
import PieContents from "./components/PieContents";

const SITE_URL = "https://sweetnsavoury.netlify.app";

function setMeta(name, content) {
  if (!content) return () => {};
  let el = document.head.querySelector(`meta[name="${name}"]`);
  const created = !el;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("content");
  el.setAttribute("content", content);
  return () => {
    if (created) el.remove();
    else if (previous != null) el.setAttribute("content", previous);
  };
}

function setOg(property, content) {
  if (!content) return () => {};
  let el = document.head.querySelector(`meta[property="${property}"]`);
  const created = !el;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("content");
  el.setAttribute("content", content);
  return () => {
    if (created) el.remove();
    else if (previous != null) el.setAttribute("content", previous);
  };
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  const created = !el;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("href");
  el.setAttribute("href", href);
  return () => {
    if (created) el.remove();
    else if (previous != null) el.setAttribute("href", previous);
  };
}

function PieDetail() {
  // Loads the Shopify Buy Button SDK once for the entire app lifetime.
  useShopifyCart();
  const { slug } = useParams();
  const selectedProduct = piesData.find((p) => p.slug === slug);
  const formatGroupId = useId();
  const [formatId, setFormatId] = useState("fresh");
  const [quantity, setQuantity] = useState(1);
  const width = useWidth();

  // Reset selections when the user navigates to a different pie so a "frozen"
  // choice on one product doesn't carry over to the next.
  useEffect(() => {
    setFormatId("fresh");
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  useEffect(() => {
    if (!selectedProduct) {
      const previousTitle = document.title;
      document.title = "Pie not found · Sweet & Savoury";
      const undoNoindex = setMeta("robots", "noindex,follow");
      return () => {
        document.title = previousTitle;
        undoNoindex?.();
      };
    }

    const previousTitle = document.title;
    const pageTitle = `${selectedProduct.name} · Sweet & Savoury`;
    const description = selectedProduct.tagline
      ? `${selectedProduct.name} — ${selectedProduct.tagline} Order for in-store pickup from Sweet & Savoury, Stouffville ON.`
      : `${selectedProduct.name}, handcrafted in Stouffville ON. Order for in-store pickup.`;
    const url = `${SITE_URL}/pies/${selectedProduct.slug}`;
    const imageUrl = selectedProduct.img.startsWith("http")
      ? selectedProduct.img
      : `${SITE_URL}${selectedProduct.img.startsWith("/") ? "" : "/"}${selectedProduct.img}`;

    document.title = pageTitle;
    const undo = [
      setMeta("description", description),
      setOg("og:title", pageTitle),
      setOg("og:description", description),
      setOg("og:url", url),
      setOg("og:image", imageUrl),
      setOg("og:type", "product"),
      setMeta("twitter:title", pageTitle),
      setMeta("twitter:description", description),
      setMeta("twitter:image", imageUrl),
      setCanonical(url),
    ];

    const ld = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: selectedProduct.name,
      description,
      image: [imageUrl],
      category: selectedProduct.category === "sweet" ? "Bakery > Sweet" : "Bakery > Savoury Pie",
      brand: { "@type": "Brand", name: "Sweet & Savoury" },
      offers: {
        "@type": "Offer",
        priceCurrency: "CAD",
        price: selectedProduct.price.toFixed(2),
        availability: "https://schema.org/InStock",
        url,
        itemCondition: "https://schema.org/NewCondition",
      },
    };
    const ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.text = JSON.stringify(ld);
    document.head.appendChild(ldScript);

    return () => {
      document.title = previousTitle;
      undo.forEach((fn) => fn?.());
      ldScript.remove();
    };
  }, [selectedProduct]);

  if (!selectedProduct) {
    return (
      <>
        <Layout>
          <div className="pieDetail__notFound" role="alert">
            <h1>Pie not found</h1>
            <p>Sorry, we couldn’t find that bake. It may have sold out or been renamed.</p>
            <Link to="/#menu">
              <Button variant="primary" size="med">Back to menu</Button>
            </Link>
          </div>
        </Layout>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Layout>
        <article className="pieDetail">
          <div className="pieDetail__imgContainer">
            <Button
              as="span"
              variant={selectedProduct.category === "sweet" ? "green" : "primary"}
              size="small"
              className="pieDetail__badge"
            >
              <span className="pieDetail__badgeText">
                {selectedProduct.category}
              </span>
            </Button>
            <img
              className="pieDetail__img"
              src={selectedProduct.img}
              alt={`${selectedProduct.name} — ${selectedProduct.tagline}`}
              width="800"
              height="600"
              loading="eager"
              decoding="async"
            />
          </div>

          {width < 768 ? (
            <PieContents
              selectedProduct={selectedProduct}
              formatGroupId={formatGroupId}
              formatId={formatId}
              setFormatId={setFormatId}
              quantity={quantity}
              setQuantity={setQuantity}
              addToShopifyCart={addToShopifyCart}
            />
          ) : (
            <div className="pieDetail__lrgContainer">
              <PieContents
                selectedProduct={selectedProduct}
                formatGroupId={formatGroupId}
                formatId={formatId}
                setFormatId={setFormatId}
                quantity={quantity}
                setQuantity={setQuantity}
                addToShopifyCart={addToShopifyCart}
              />
            </div>
          )}
        </article>
      </Layout>
      <Footer />
    </>
  );
}

export default PieDetail;
