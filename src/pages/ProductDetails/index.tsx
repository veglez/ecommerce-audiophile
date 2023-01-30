import Ad from "@components/Ad/Base";
import ProductDetailsCard from "@components/Card/ProductDetailsCard";
import SeeProductCard from "@components/Card/SeeProductCard";
import Gallery from "@components/Gallery";
import ComponentBased from "@components/Navbar/ComponentBased";
import ProductFeatures from "@components/ProductFeatures";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BackButtonStyled, Container, Navbar } from "./productdetails.styles";

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
    <Container direction="column" gap={120}>
      <BackButtonStyled />

      <Flex direction="column" gap={88}>
        <ProductDetailsCard {...product} />

        <ProductFeatures {...product} />

        <Gallery {...product.gallery} />
      </Flex>
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
      <Navbar />
      <Ad style={{ marginBlockEnd: 104 }} />
    </Container>
  );
};

export default ProductDetails;
