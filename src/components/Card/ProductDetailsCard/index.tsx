import Button from "@components/Button";
import Counter from "@components/Counter";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import { breakpoints } from "@styles/theme/default";
import { FC } from "react";
import { ImageSources } from "types/image";
import { NewProductText } from "./styles.productdetailscard";

export interface IProductDetailsCardProps {
  images: ImageSources;
  isNew: boolean;
  title: string;
  description: string;
  price: number;
}

const ProductDetailsCard: FC<IProductDetailsCardProps> = (props) => {
  const { images, isNew, title, description, price } = props;
  return (
    <Flex as="article" gap={32} direction={"column"}>
      <picture>
        <source
          media={`(min-width: ${breakpoints.desktop})`}
          srcSet={images.desktop}
        />
        <source
          media={`(min-width: ${breakpoints.tablet})`}
          srcSet={images.tablet}
        />
        <img src={images.mobile} alt={`${title} image`} />
      </picture>

      <Flex gap={24} align={"flex-start"} direction={"column"}>
        {isNew && (
          <NewProductText variant="overline">new product</NewProductText>
        )}
        <Typography variant="h4" as={"h3"}>
          {title}
        </Typography>
        <Typography variant="body" style={{ opacity: 0.5 }}>
          {description}
        </Typography>
        <Typography variant="h6">$ {price}</Typography>
      </Flex>

      <Flex
        style={{ width: "100%", height: 48 }}
        gap={16}
        justify={"flex-start"}
        align={"stretch"}
      >
        <Counter />
        <Button type="filled" text="add to cart" />
      </Flex>
    </Flex>
  );
};

export default ProductDetailsCard;
