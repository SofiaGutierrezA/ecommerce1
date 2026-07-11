import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home({ addToCart }) {
  return (
    <>
      <Hero />
      <ProductSection addToCart={addToCart} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;