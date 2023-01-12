import { Icon } from "@components/Icon";
import Button from "components/Button";
import React, { FC } from "react";
import {
  StyledPicture,
  StyledArticle,
  Text,
} from "./styles.cardNavigationLink";

import icon from "@images/shared/desktop/icon-arrow-right.svg";

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

      <Button
        text="shop"
        type="withIcon"
        Icon={<Icon src={icon} width={5} height={10} />}
      />
    </StyledArticle>
  );
};

export default CardNavigationLink;
