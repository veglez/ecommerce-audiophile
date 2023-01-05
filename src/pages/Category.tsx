import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>
        Welcome to category: <strong>{category}</strong>
      </h1>
    </div>
  );
};

export default Category;
