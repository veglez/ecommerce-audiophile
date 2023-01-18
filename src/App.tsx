import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Header from "./layout/Header";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Globals from "@styles/Globals";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "@redux/features/product/productSlice";
import { AppDispatch } from "@redux/store";

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <Globals />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>Este es el footer</footer>
    </>
  );
};

export default App;
