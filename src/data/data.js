export const piesData = [
  {
    name: "Steak Pie",
    description:
      "Tender chunks of slow-braised beef and caramelised onions in a rich, peppery gravy, wrapped in golden, flaky pastry. Hearty, comforting, and full of bold savoury flavour.",
    ingredients:
      "Beef, onions, wheat flour, butter, beef stock, vegetable oil, salt, black pepper",
    price: 8,
    img: `${import.meta.env.BASE_URL}assets/images/productImages/steak-pie2.jpg`,
    category: "savoury",
    isFeatured: true,
    variantId: "50715681521911",
  },
  {
    name: "Chicken Pie",
    description:
      "Succulent chicken simmered in a mild, aromatic curry inspired by South African flavours, with gentle warmth and subtle spice. Encased in golden, flaky pastry for a rich, comforting savoury bite.",
    ingredients:
      "Chicken, onions, wheat flour, butter, milk, mild curry spices, vegetable oil, salt",
    price: 5,
    img: `${import.meta.env.BASE_URL}assets/images/productImages/chicken-pie.jpg`,
    category: "savoury",
    isFeatured: true,
    variantId: "50715697512695",
  },
  {
    name: "Mince Beef Pie",
    description:
      "Seasoned minced beef slow-cooked with onions in a rich, savoury gravy, baked in golden, flaky pastry. A classic, hearty favourite with bold, comforting flavour.",
    ingredients:
      "Minced beef, onions, wheat flour, butter, beef stock, vegetable oil, salt, pepper",
    price: 7,
    img: `${import.meta.env.BASE_URL}assets/images/productImages/ground-beef.jpg`,
    category: "savoury",
    isFeatured: false,
    variantId: "50715703410935",
  },
  {
    name: "Spinach & Cheese Pie",
    description:
      "Tender spinach folded through a creamy blend of melted cheese, baked in golden, flaky pastry. Rich, savoury, and perfectly comforting.",
    ingredients:
      "Spinach, cheese, wheat flour, butter, milk, eggs, salt, black pepper",
    price: 5,
    img: `${import.meta.env.BASE_URL}assets/images/productImages/spinach-pie.jpg`,
    category: "savoury",
    isFeatured: false,
    variantId: "50715703804151",
  },
  {
    name: "Lamington",
    description:
      "Soft vanilla sponge layered with strawberry flavour, coated in coconut for a light, sweet finish. A classic treat with a fruity twist.",
    ingredients:
      "Wheat flour, sugar, eggs, butter, milk, strawberry jam, coconut",
    price: 4,
    img: `${import.meta.env.BASE_URL}assets/images/productImages/lemington-cake-3.jpeg`,
    category: "sweet",
    isFeatured: true,
    variantId: "50715705016567",
  },
  {
    name: "Double Chocolate Soft-Bake Cookie",
    description:
      "A rich, soft-baked double chocolate cookie with a moist, cake-like centre and deep cocoa flavour. Decadent, indulgent, and melt-in-your-mouth.",
    ingredients:
      "Wheat flour, sugar, butter, eggs, cocoa powder, chocolate chips, baking powder",
    price: 3,
    img: `${import.meta.env.BASE_URL}assets/images/productImages/chocolate-cookie-3.jpeg`,
    category: "sweet",
    isFeatured: false,
    variantId: "50715706654967",
  },
  {
    name: "Jam Crumble Tart",
    description:
      "Buttery shortcrust pastry filled with sweet, fruity jam and topped with a soft, golden dough crumble. A classic bake with the perfect balance of crisp and tender.",
    ingredients:
      "Wheat flour, butter, sugar, eggs, fruit jam, baking powder",
    price: 4,
    img: `${import.meta.env.BASE_URL}assets/images/productImages/jam-tart-3.jpeg`,
    category: "sweet",
    isFeatured: true,
    variantId: "50715706196215",
  },
];

  

// Use Vite's BASE_URL so this path works both locally and when deployed under a subfolder.
// Images live in: public/assets/images/
