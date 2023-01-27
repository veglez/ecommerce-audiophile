import GoBack from "@components/Button/GoBack";
import ThankYou from "@components/Card/ThankYou";
import Modal from "@components/UI/Modal";
import Summary from "@containers/Card/Summary";
import FormCheckout from "@containers/Form/Checkout";
import { useState } from "react";
import { Container } from "./checkout.styles";

const Checkout = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <Container>
      <GoBack />
      <FormCheckout />
      <Summary onClick={handleClick} />

      <Modal onClick={() => setIsVisible(false)} isVisible={isVisible}>
        <ThankYou />
      </Modal>
    </Container>
  );
};

export default Checkout;
