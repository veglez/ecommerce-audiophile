import Icon from "@components/Icon/BaseIcon";
import { Container } from "./footer.styles";
import TextOnly from "@components/Navbar/TextOnly";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import Logo from "../../statics/assets/shared/desktop/logo.svg";
import Facebook from "@images/shared/desktop/icon-facebook.svg";
import Twitter from "@images/shared/desktop/icon-twitter.svg";
import Instagram from "@images/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <Container forwardedAs={"footer"} direction="column" gap={48}>
      <Icon src={Logo} width={143} height={25} />
      <TextOnly style={{ flexDirection: "column" }} />
      <Typography style={{ opacity: 0.5 }}>
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we&apos;re open 7 days a week.
      </Typography>

      <Typography style={{ opacity: 0.5 }}>
        Copyright 2021. All Rights Reserved
      </Typography>
      <Flex gap={16}>
        <Icon src={Facebook} />
        <Icon src={Twitter} />
        <Icon src={Instagram} />
      </Flex>
    </Container>
  );
};

export default Footer;
