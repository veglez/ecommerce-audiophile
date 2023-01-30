import Button from "@components/Button/Base";
import ResponsiveImage from "@components/ResponsiveImage";
import { FC } from "react";
import {
  Title,
  Container,
  ImgContainer,
  Message,
} from "./productbgorange.styles";

import mobile from "@images/home/mobile/image-speaker-zx9.png";
import tablet from "@images/home/tablet/image-speaker-zx9.png";
import desktop from "@images/home/desktop/image-speaker-zx9.png";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { Link } from "react-router-dom";

export type IProductBGOrange = Partial<API.Product>;

const images = {
  mobile,
  tablet,
  desktop,
};

const ProductBGOrange: FC<IProductBGOrange> = (props) => {
  const { name: productName } = props;
  const { products } = useSelector((store: RootState) => store.products);
  const desireProduct = products.find((item) => item.id === 6) as API.Product;
  const name = productName ?? desireProduct.name;
  return (
    <Container direction="column" gap={24}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <ImgContainer>
        <ResponsiveImage image={images} name={name} />
      </ImgContainer>
      <Title>{name}</Title>
      <Message align="center">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </Message>
      <Link to={`/product-details/${desireProduct.id}`}>
        <Button
          text="see product"
          variant="filled"
          style={{ backgroundColor: "black" }}
        />
      </Link>
    </Container>
  );
};

export default ProductBGOrange;
