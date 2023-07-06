import Button from "@components/Button/Base";
import ResponsiveImage from "@components/ResponsiveImage";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import { RootState } from "@redux/store";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Main } from "./Third.styles";
import desktop from "@images/home/desktop/image-earphones-yx1.jpg";
import tablet from "@images/home/tablet/image-earphones-yx1.jpg";
import mobile from "@images/home/mobile/image-earphones-yx1.jpg";

type IAdThirdProps = Partial<API.Product>;

const Third: FC<IAdThirdProps> = (props) => {
  const { products } = useSelector((store: RootState) => store.products);
  const desireProduct = products.find((item) => item.id === 1) as API.Product;
  const {
    image = { desktop, tablet, mobile },
    name = desireProduct.name,
    id = desireProduct.id,
  } = props;

  return (
    <Container direction="column" gap={24}>
      <ResponsiveImage image={image} name={name} />
      <Main direction="column" gap={32} align="flex-start">
        <Typography variant="h4">{name}</Typography>
        <Link to={`/product-details/${id}`}>
          <Button
            text="see product"
            variant="outlined"
            style={{
              color: "black",
              background: "transparent",
              border: "1px solid black",
            }}
          />
        </Link>
      </Main>
    </Container>
  );
};
export default Third;
