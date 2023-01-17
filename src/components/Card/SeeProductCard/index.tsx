import { FC } from "react";
import Typography from "@components/Typography";
import Button from "@components/Button";
import Flex from "@components/UI/Flex";
import { PickRequired } from "types/utilities";
import ResponsiveImage from "@components/ResponsiveImage";

type ISeeProductCard = PickRequired<API.Product, "name" | "image"> & {
  alt?: string;
};

const SeeProductCard: FC<ISeeProductCard> = (props) => {
  const { image, name, alt } = props;
  return (
    <Flex as="article" direction="column" gap={32}>
      <ResponsiveImage name={name} image={image} />

      <Typography variant="h5" as={"h3"}>
        {name}
      </Typography>

      <Button text="see product" type="filled" />
    </Flex>
  );
};

export default SeeProductCard;
