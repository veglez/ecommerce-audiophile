import Button from "@components/Button";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Title } from "./styles.category";

const Category = () => {
  const { category } = useParams();

  const { products: allProducts } = useSelector(
    (state: RootState) => state.products
  );
  const products = allProducts.filter((item) => item.category === category);

  return (
    <div>
      <Title variant="h4" align="center">
        {category}
      </Title>

      {products.map((item) => {
        return (
          <Component name={item.name} key={item.id} category={item.category} />
        );
      })}
    </div>
  );
};

const Component = (props: any) => {
  const { name, category } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{category}</p>
      <Button text="see product" type="filled" />
    </div>
  );
};

export default Category;
