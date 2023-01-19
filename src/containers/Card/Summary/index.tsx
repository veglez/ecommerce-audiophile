import Button from "@components/Button";
import ProductQuantity from "@components/Card/ProductQuantity";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import { RootState } from "@redux/store";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Container, TypographyStyled } from "./styles.summary";

const Price: FC<{ text: string; price: string; isOrange?: boolean }> = (
  props
) => {
  const { text, price, isOrange = false } = props;
  return (
    <Flex justify="space-between">
      <TypographyStyled isOrange={false} style={{ opacity: 0.5 }}>
        {text}
      </TypographyStyled>
      <TypographyStyled isOrange={isOrange} variant="h6">
        {price}
      </TypographyStyled>
    </Flex>
  );
};

const Summary = () => {
  const cartState = useSelector((state: RootState) => state.cart);

  return (
    <Container direction="column" gap={32}>
      <Typography variant="h6" as="h3" style={{ alignSelf: "flex-start" }}>
        Summary
      </Typography>

      <Flex gap={24} direction="column">
        {cartState.products.map((item) => {
          return (
            <ProductQuantity
              key={item.product.id}
              {...item.product}
              Element={
                <Typography style={{ opacity: 0.5 }}>x{item.count}</Typography>
              }
            />
          );
        })}
      </Flex>

      <Flex direction="column" gap={8}>
        <Price text="total" price={`$ ${cartState.subtotal}`} />
        <Price text="shipping" price={`$ ${cartState.shipping}`} />
        <Price text="vat (included)" price={`$ ${cartState.vat}`} />
        <Price isOrange text="grand total" price={`$ ${cartState.total}`} />
      </Flex>
      <Button text="continue & pay" type="filled" />
    </Container>
  );
};

export default Summary;
