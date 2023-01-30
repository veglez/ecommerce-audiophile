import Button from "@components/Button/Base";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import { RootState } from "@redux/store";
import { useDispatch, useSelector } from "react-redux";
import ProductQuantity from "../ProductQuantity";
import { Container } from "./cart.styles";
import { Link } from "react-router-dom";
import { FC } from "react";
import { removeAll } from "@redux/features/cart/cartSlice";
import Temporal from "@components/Temporal";

interface ICartProps {
  handleCloseModal?: () => void;
}

const Cart: FC<ICartProps> = (props) => {
  const { handleCloseModal } = props;
  const state = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  return (
    <Container direction="column" gap={24}>
      <Flex justify="space-between">
        <Typography variant="h6">Cart ({state.products.length})</Typography>
        <Typography
          style={{ opacity: 0.5, textDecoration: "underline" }}
          onClick={() => dispatch(removeAll())}
        >
          Remove all
        </Typography>
      </Flex>
      <Flex direction="column" gap={24} style={{ marginBlock: 8 }}>
        {state.products.map((item) => (
          <ProductQuantity
            key={item.product.id}
            {...item.product}
            Element={<Temporal {...item.product} />}
          />
        ))}
      </Flex>
      <Flex justify="space-between">
        <Typography style={{ opacity: 0.5, textTransform: "uppercase" }}>
          total
        </Typography>
        <Typography variant="h6">$ {state.subtotal}</Typography>
      </Flex>

      {state.products.length > 0 && (
        <Link
          to="/checkout"
          style={{ width: "100%" }}
          onClick={handleCloseModal}
        >
          <Button
            text="checkout"
            variant="filled"
            style={{ justifyContent: "center", width: "100%" }}
          />
        </Link>
      )}
    </Container>
  );
};

export default Cart;
