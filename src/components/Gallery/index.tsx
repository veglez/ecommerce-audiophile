import ResponsiveImage from "@components/ResponsiveImage";
import { FC } from "react";
import { Container } from "./styles.gallery";

type IGalleryProps = API.Gallery;

const Gallery: FC<IGalleryProps> = (props) => {
  const { first, second, third } = props;
  return (
    <Container>
      <ResponsiveImage image={first} name={first.mobile.split("/")[2]} />
      <ResponsiveImage image={second} name={second.mobile.split("/")[2]} />
      <ResponsiveImage image={third} name={third.mobile.split("/")[2]} />
    </Container>
  );
};

export default Gallery;
