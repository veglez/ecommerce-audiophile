import Ad from "@components/Ad";
import CardProductOverview from "@components/Card/CardProductOverview";
import ComponentBased from "@components/Navbar/ComponentBased";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Title } from "./styles.category";

const Category = () => {
  const { category } = useParams();

  const { products: allProducts } = useSelector(
    (state: RootState) => state.products
  );
  const products = allProducts
    .filter((item: API.Product) => item.category === category)
    .sort((a) => {
      if (a.new) {
        return -1;
      } else {
        return 1;
      }
    });

  return (
    <>
      <Title variant="h4" align="center">
        {category}
      </Title>
      <Container direction="column" gap={120}>
        {products.map((item) => {
          return <CardProductOverview key={item.id} {...item} />;
        })}

        <ComponentBased style={{ backgroundColor: "transparent" }} />

        <Ad />
      </Container>
    </>
  );
};

export default Category;
