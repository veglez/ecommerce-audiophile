import Button from "@components/Button/Base";
import ResponsiveImage from "@components/ResponsiveImage";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import { FC } from "react";
import { Link } from "react-router-dom";
import { PickRequired } from "types/utilities";
import { NewProductText } from "../ProductDetailsCard/styles.productdetailscard";

export type ICardProductOverviewProps = PickRequired<
  API.Product,
  "id" | "image" | "new" | "name" | "description"
>;

const CardProductOverview: FC<ICardProductOverviewProps> = (props) => {
  const { image, new: isNew, name, description, id } = props;
  return (
    <Flex direction="column" gap={32}>
      <ResponsiveImage image={image} name={name} />
      <Flex gap={24} direction="column">
        <NewProductText variant="overline">
          {isNew ? "new product" : ""}
        </NewProductText>

        <Typography align="center" variant="h4">
          {name}
        </Typography>
        <Typography align="center" style={{ opacity: 0.5 }}>
          {description}
        </Typography>
        <Link to={`/product-details/${id}`}>
          <Button text={"see product"} type="filled" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default CardProductOverview;
