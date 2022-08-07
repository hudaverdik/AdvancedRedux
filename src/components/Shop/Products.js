import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Crystal Necklace",
    description: "Shoos away stray dogs.",
  },
  {
    id: "p2",
    price: 34,
    title: "Katana",
    description: "Japanese slicer.",
  },
  {
    id: "p3",
    price: 6,
    title: "Helmet",
    description: "Protects your head.",
  },
];

const Products = (props) => {
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
        <ProductItem
          key= {product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}</ul>
    </section>
  );
};

export default Products;
