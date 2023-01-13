import ProductDetailsCard from "@components/Card/ProductDetailsCard";
import { APIResponse } from "mocks/handlers";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const [products, setProducts] = useState<API.Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window
      .fetch("/products")
      .then((response) => response.json())
      .then((results: APIResponse) => {
        setProducts(results.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Hubo un error: {error}</p>;
  }

  return (
    <div>
      <h2>Product Details page</h2>
      {products.slice(0, 1).map((item) => {
        return <ProductDetailsCard key={item.name} {...item} />;
      })}
    </div>
  );
};

export default ProductDetails;
