import Button from "components/Button";
import React, { FC } from "react";
import {
  StyledPicture,
  StyledArticle,
  Text,
} from "./styles.cardNavigationLink";

export interface ICardNavigationLinkProps {
  image: string;
  title: string;
}

const CardNavigationLink: FC<ICardNavigationLinkProps> = (props) => {
  const { title, image } = props;
  return (
    <StyledArticle>
      <StyledPicture>
        <img src={image} alt={`image of category ${title}`} />
      </StyledPicture>
      <Text>{title}</Text>

      <Button text="shop" type="filled" />
    </StyledArticle>
  );
};

export default CardNavigationLink;
