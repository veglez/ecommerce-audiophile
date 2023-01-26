import GoBack from "@components/Button/GoBack";
import Summary from "@containers/Card/Summary";
import FormCheckout from "@containers/Form/Checkout";
import { Container } from "./checkout.styles";

const Checkout = () => {
  return (
    <Container>
      <GoBack />
      <FormCheckout />
      <Summary />
    </Container>
  );
};

export default Checkout;
