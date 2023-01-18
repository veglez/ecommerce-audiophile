import Button from "@components/Button";
import ComponentBased from "@components/Navbar/ComponentBased";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
          <Component
            name={item.name}
            key={item.id}
            category={item.category}
            id={item.id}
          />
        );
      })}

      <ComponentBased />
    </div>
  );
};

const Component = (props: any) => {
  const { name, category, id } = props;
  return (
    <div>
      <h1>{name}</h1>
      <p>{category}</p>
      <Link to={`/product-details/${id}`}>
        <Button text="see product" type="filled" />
      </Link>
    </div>
  );
};

export default Category;
