import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Header from "./layout/Header";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Globals from "@styles/Globals";
import Typography from "@components/Typography";
import SeeProductCard from "@components/SeeProductCard";
import Mobile from "@images/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import tablet from "@images/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import desktop from "@images/product-xx99-mark-one-headphones/desktop/image-product.jpg";

const App = () => {
  return (
    <>
      <Globals />
      <Header />
      <Typography
        as="h1"
        variant="overline"
        style={{
          opacity: 0.15,
          color: "#542087",
          fontSize: "8rem",
          width: "80vw",
        }}
      >
        texto con estilos
      </Typography>

      <SeeProductCard
        title="xx99 mark I"
        src={{ mobile: Mobile, tablet, desktop }}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>Este es el footer</footer>
    </>
  );
};

export default App;
