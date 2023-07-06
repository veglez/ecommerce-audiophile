import desktop from "@images/shared/desktop/image-best-gear.jpg";
import tablet from "@images/shared/tablet/image-best-gear.jpg";
import mobile from "@images/shared/mobile/image-best-gear.jpg";
import Typography from "@components/Typography";
import { Title, OrangeText, Container, Image } from "./ad.styles";
import { FC } from "react";

const images: API.Product["image"] = {
  desktop,
  tablet,
  mobile,
};
const Ad: FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <Container {...props}>
      <Image image={images} name="best gear" />
      <div id="content">
        <Title variant="h4" align="center">
          Bringing you the{" "}
          <OrangeText forwardedAs={"span"} variant="h4">
            {" "}
            best <br />
          </OrangeText>{" "}
          audio gear
        </Title>

        <Typography align="center" style={{ opacity: 0.5 }}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Typography>
      </div>
    </Container>
  );
};

export default Ad;
