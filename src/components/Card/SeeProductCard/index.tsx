import { FC } from "react";
import Typography from "@components/Typography";
import Button from "@components/Button/Base";
import Flex from "@components/UI/Flex";
import { PickRequired } from "types/utilities";
import ResponsiveImage from "@components/ResponsiveImage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

type ISeeProductCard = PickRequired<API.Product, "name" | "image">;

const SeeProductCard: FC<ISeeProductCard> = (props) => {
  const { image, name, slug } = props;
  const { products } = useSelector((state: RootState) => state.products);

  function getIdFromSlug(slug: string): string {
    const product = products.find((item) => item.slug === slug);
    return String(product!.id);
  }

  return (
    <Flex as="article" direction="column" gap={32}>
      <ResponsiveImage name={name} image={image} />

      <Typography variant="h5" as={"h3"}>
        {name}
      </Typography>

      <Link to={`/product-details/${getIdFromSlug(slug as string)}`}>
        <Button text="see product" type="filled" />
      </Link>
    </Flex>
  );
};

export default SeeProductCard;
