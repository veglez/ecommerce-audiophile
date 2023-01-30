import Button from "@components/Button/Base";
import Typography from "@components/Typography";
import { FC } from "react";
import { PickRequired } from "types/utilities";
import { Container, NewProductText, ProductName } from "./hero.styles";
import desktop from "@images/home/desktop/image-hero.jpg";
import tablet from "@images/home/tablet/image-hero.jpg";
import mobile from "@images/home/mobile/image-hero.jpg";
import { Link } from "react-router-dom";

type IHeroProps = PickRequired<API.Product, "name" | "new" | "id">;

const Hero: FC<IHeroProps> = (props) => {
  const { name, new: isNew, id } = props;

  return (
    <Container direction="column" images={{ desktop, tablet, mobile }}>
      {isNew && (
        <NewProductText align="center" variant="overline">
          new product
        </NewProductText>
      )}
      <ProductName>{name}</ProductName>
      <Typography align="center" style={{ opacity: 0.75 }}>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Typography>

      <Link to={`/product-details/${id}`}>
        <Button
          style={{ position: "relative" }}
          text="see product"
          variant="filled"
        />
      </Link>
    </Container>
  );
};

export default Hero;
