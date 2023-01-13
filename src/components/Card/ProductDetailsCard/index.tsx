import Button from "@components/Button";
import Counter from "@components/Counter";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import { breakpoints } from "@styles/theme/default";
import { FC } from "react";
import { PickRequired } from "types/utilities";
import { NewProductText } from "./styles.productdetailscard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@redux/store";
import { addProducts } from "@redux/features/cart/cartSlice";

export type IProductDetailsCardProps = PickRequired<
  API.Product,
  "image" | "new" | "name" | "description" | "price"
>;

const ProductDetailsCard: FC<IProductDetailsCardProps> = (props) => {
  const { image, new: isNew, name, description, price } = props;
  const state = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <Flex as="article" gap={32} direction={"column"}>
      <picture>
        <source
          media={`(min-width: ${breakpoints.desktop})`}
          srcSet={image.desktop}
        />
        <source
          media={`(min-width: ${breakpoints.tablet})`}
          srcSet={image.tablet}
        />
        <img src={image.mobile} alt={`${name} image`} />
      </picture>

      <Flex gap={24} align={"flex-start"} direction={"column"}>
        {isNew && (
          <NewProductText variant="overline">new product</NewProductText>
        )}
        <Typography variant="h4" as={"h3"}>
          {name}
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
        <Button
          type="filled"
          text="add to cart"
          onClick={() =>
            dispatch(addProducts({ product: props as API.Product, count: 4 }))
          }
        />
      </Flex>
    </Flex>
  );
};

export default ProductDetailsCard;
