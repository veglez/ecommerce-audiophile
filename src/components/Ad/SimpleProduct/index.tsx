import Button from "@components/Button/Base";
import Typography from "@components/Typography";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import mobile from "@images/home/mobile/image-speaker-zx7.jpg";
import tablet from "@images/home/tablet/image-speaker-zx7.jpg";
import desktop from "@images/home/desktop/image-speaker-zx7.jpg";
import ResponsiveImage from "@components/ResponsiveImage";
import { Container, ImgContainer } from "./simpleproduct.styles";
import Flex from "@components/UI/Flex";

const AdSimpleProduct = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const product = products.find((item) => item.id === 5) as API.Product;

  const images = {
    mobile,
    tablet,
    desktop,
  };
  return (
    <Container>
      <ImgContainer>
        <ResponsiveImage image={images} name={product.name} />
      </ImgContainer>
      <Flex direction="column" gap={32} align="flex-start">
        <Typography variant="h4">{product.name}</Typography>
        <Link to={`/product-details/${product.id}`}>
          <Button
            text="see product"
            type="outlined"
            style={{
              color: "black",
              background: "transparent",
              border: "1px solid black",
            }}
          />
        </Link>
      </Flex>
    </Container>
  );
};

export default AdSimpleProduct;
