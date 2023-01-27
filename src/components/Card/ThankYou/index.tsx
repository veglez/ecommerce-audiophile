import Button from "@components/Button/Base";
import Icon from "@components/Icon/BaseIcon";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import Check from "@images/checkout/icon-order-confirmation.svg";
import {
  Container,
  GrandTotal,
  MainContainer,
  OtherItems,
} from "./thankyou.styles";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductQuantity from "../ProductQuantity";

const ThankYou = () => {
  return (
    <MainContainer direction="column" align="flex-start" gap={24}>
      <Icon src={Check} width={64} height={64} />
      <Typography variant="h5" style={{ letterSpacing: "0.086rem" }}>
        Thank you for your order
      </Typography>
      <Typography style={{ opacity: 0.5, marginBlockStart: "-8px" }}>
        You will receive an email confirmation shortly.
      </Typography>

      <CartSummary />
      <Link to={"/"}>
        <Button text="back to home" type="filled" />
      </Link>
    </MainContainer>
  );
};

const CartSummary = () => {
  const cartState = useSelector((store: RootState) => store.cart);

  const totalProducts = cartState.products.length;

  if (totalProducts < 1) {
    return <div>There are not products in the cart</div>;
  }
  const firstProduct = cartState.products[0];
  return (
    <>
      <Container direction="column">
        <ProductQuantity
          {...firstProduct.product}
          Element={<Typography>x{firstProduct.count}</Typography>}
        />
        <OtherItems>
          {totalProducts > 1 && (
            <Typography>
              and{totalProducts - 1} other item
              {totalProducts > 2 ? "(s)" : null}
            </Typography>
          )}
        </OtherItems>
      </Container>
      <GrandTotal direction="column" align="flex-start" gap={8}>
        <Typography style={{ opacity: 0.5, color: "white" }}>
          GRAND TOTAL
        </Typography>
        <Typography variant="h6" style={{ letterSpacing: 0, color: "white" }}>
          $ {cartState.total}
        </Typography>
      </GrandTotal>
    </>
  );
};

export default ThankYou;
