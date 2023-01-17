import ProductDetailsCard from "@components/Card/ProductDetailsCard";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { error, loading, products } = useSelector(
    (state: RootState) => state.products
  );

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Hubo un error: {error}</p>;
  }

  return (
    <div>
      <h2>Product Details page</h2>
      {products.map((item) => {
        return <ProductDetailsCard key={item.name} {...item} />;
      })}
    </div>
  );
};

export default ProductDetails;
