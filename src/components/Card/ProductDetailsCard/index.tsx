import Button from "@components/Button";
import Counter, { ICounterRef } from "@components/Counter";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import { FC, useRef } from "react";
import { PickRequired } from "types/utilities";
import { NewProductText } from "./styles.productdetailscard";
import { useDispatch } from "react-redux";
import { addProducts } from "@redux/features/cart/cartSlice";
import ResponsiveImage from "@components/ResponsiveImage";

export type IProductDetailsCardProps = PickRequired<
  API.Product,
  "image" | "new" | "name" | "description" | "price"
>;

const ProductDetailsCard: FC<IProductDetailsCardProps> = (props) => {
  const { image, new: isNew, name, description, price } = props;
  const dispatch = useDispatch();
  const counterRef = useRef<ICounterRef | null>(null);

  return (
    <Flex as="article" gap={32} direction={"column"}>
      <ResponsiveImage name={name} image={image} />

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
        <Counter ref={counterRef} />
        <Button
          type="filled"
          text="add to cart"
          onClick={() => {
            dispatch(
              addProducts({
                product: props as API.Product,
                count: counterRef.current?.counter ?? 1,
              })
            );
          }}
        />
      </Flex>
    </Flex>
  );
};

export default ProductDetailsCard;
