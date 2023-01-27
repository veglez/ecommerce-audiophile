import { Title } from "@components/Ad/Base/ad.styles";
import Typography from "@components/Typography";
import Flex from "@components/UI/Flex";
import { FC } from "react";
import { PickRequired } from "types/utilities";
import { Quantity } from "./productfeatures.styles";

export type IProductFeaturesProps = PickRequired<
  API.Product,
  "features" | "includes"
>;

const ProductFeatures: FC<IProductFeaturesProps> = (props) => {
  const { features, includes } = props;
  return (
    <div>
      <section>
        <Title as="h3">FEATURES</Title>
        <Typography style={{ opacity: 0.5, lineHeight: "2.5rem" }}>
          {features}
        </Typography>
      </section>
      <section>
        <Title as="h3">IN THE BOX</Title>
        {includes.map((item) => {
          return (
            <Flex justify="flex-start" key={item.item} gap={24}>
              <Quantity>x{item.quantity}</Quantity>
              <Typography style={{ opacity: 0.5, lineHeight: "2.5rem" }}>
                {item.item}
              </Typography>
            </Flex>
          );
        })}
      </section>
    </div>
  );
};

export default ProductFeatures;
