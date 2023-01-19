import ResponsiveImage from "@components/ResponsiveImage";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";

import { FC } from "react";

type IProductQuantityProps = API.Product & {
  Element?: React.ReactElement;
};

const ProductQuantity: FC<IProductQuantityProps> = (props) => {
  const { image, name, price, Element } = props;

  return (
    <Flex gap={17} justify="space-between" style={{ width: "100%" }}>
      <ResponsiveImage name={name} image={image} maxWidth={64} />
      <Flex direction="column" align="flex-start">
        <Typography>{name}</Typography>
        <Typography variant="overline" style={{ opacity: 0.5 }}>
          $ {price}
        </Typography>
      </Flex>

      {Element && Element}
    </Flex>
  );
};

export default ProductQuantity;
