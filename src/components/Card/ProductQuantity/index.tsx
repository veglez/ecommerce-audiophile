import Counter from "@components/Counter";
import ResponsiveImage from "@components/ResponsiveImage";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import { addProducts, removeProducts } from "@redux/features/cart/cartSlice";
import { RootState } from "@redux/store";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

type IProductQuantityProps = API.Product;

const ProductQuantity: FC<IProductQuantityProps> = (props) => {
  const { id, image, name, price } = props;
  const dispatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);

  const handleIncrement = () => {
    dispatch(
      addProducts({
        product: props,
        count: 1,
      })
    );
  };

  const handleDecrement = () => {
    dispatch(
      removeProducts({
        product: props,
        count: 1,
      })
    );
  };
  return (
    <Flex gap={17} justify="space-between" style={{ width: "100%" }}>
      <ResponsiveImage
        name={name}
        image={image}
        maxWidth={64}
        borderRadius={8}
      />
      <Flex direction="column" align="flex-start">
        <Typography>{name}</Typography>
        <Typography variant="overline" style={{ opacity: 0.5 }}>
          $ {price}
        </Typography>
      </Flex>
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        number={
          cartState.products.find((item) => item.product.id === id)?.count
        }
        style={{ width: 96, height: 32 }}
      />
    </Flex>
  );
};

export default ProductQuantity;
