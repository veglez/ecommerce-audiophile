import { FC } from "react";
import Typography from "@components/Typography";
import Button from "@components/Button";
import { Picture } from "./styles.seeproductcard";
import Flex from "@components/UI/Flex";
import { breakpoints } from "@styles/theme/default";

export interface ISeeProductCard {
  src: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  alt?: string;
}

const SeeProductCard: FC<ISeeProductCard> = (props) => {
  const { src, title, alt } = props;
  return (
    <Flex as="article" direction="column" gap={32}>
      <Picture>
        <source
          media={`(min-width: ${breakpoints.desktop})`}
          srcSet={src.desktop}
        />
        <source
          media={`(min-width: ${breakpoints.tablet})`}
          srcSet={src.tablet}
        />
        <img src={src.mobile} alt={alt ?? `${title} image`} />
      </Picture>

      <Typography variant="h5" as={"h3"}>
        {title}
      </Typography>

      <Button text="see product" type="filled" />
    </Flex>
  );
};

export default SeeProductCard;
