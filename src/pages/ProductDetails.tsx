import ProductDetailsCard from "@components/Card/ProductDetailsCard";
import SeeProductCard from "@components/Card/SeeProductCard";
import Gallery from "@components/Gallery";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { error, loading, products } = useSelector(
    (state: RootState) => state.products
  );

  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Hubo un error: {error}</p>;
  }

  if (!product) {
    return (
      <Typography>Lo sentimos, producto con id:{id} no existe </Typography>
    );
  }

  return (
    <div>
      <h2>Product Details page</h2>

      <ProductDetailsCard {...product} />

      <Gallery {...product.gallery} />
      <section>
        <Typography align="center" variant="h5" as={"h3"}>
          you may also like
        </Typography>

        <Flex direction="column" gap={56}>
          {product.others.map((item) => (
            <SeeProductCard key={item.slug} {...item} />
          ))}
        </Flex>
      </section>
    </div>
  );
};

export default ProductDetails;
