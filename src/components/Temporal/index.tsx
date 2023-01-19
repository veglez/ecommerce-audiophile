import Counter from "@components/Counter";
import { addProducts, removeProducts } from "@redux/features/cart/cartSlice";
import { RootState } from "@redux/store";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

type ITemporalProps = API.Product;

const Temporal: FC<ITemporalProps> = (props) => {
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
    <Counter
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      number={
        cartState.products.find((item) => item.product.id === props.id)?.count
      }
      style={{ width: 96, height: 32 }}
    />
  );
};

export default Temporal;
