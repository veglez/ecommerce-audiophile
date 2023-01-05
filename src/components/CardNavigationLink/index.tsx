import Button from "components/Button";
import React, { FC } from "react";
import { ArticleStyled } from "./styles.cardNavigationLink";

interface ICardNavigationLinkProps {
  image: string;
  title: string;
}

const CardNavigationLink: FC<ICardNavigationLinkProps> = (props) => {
  const { title, image } = props;
  return (
    <ArticleStyled>
      <picture>
        <img src={image} alt={`image of category ${title}`} />
      </picture>
      <h2>{title}</h2>

      <Button text="shop" type="filled" />
    </ArticleStyled>
  );
};

export default CardNavigationLink;
