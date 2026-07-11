import "./ProductSection.css";
import ProductCard from "./ProductCard";
import products from "../data/Products";

function ProductSection({ addToCart }) {
    return (
         <section >
            <h2 className="product-section-title">Products</h2>
            <div className="product-section">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
                
            ))}
            </div>
         </section>
    )
}

export default ProductSection;