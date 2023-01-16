import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state: RootState) => state.cart);
  return (
    <div>
      <h2>Carrito de compras</h2>
      <p>Lista de elementos</p>
      <ul>
        {state.products.map((item) => (
          <li key={item.product.id}>{item.product.name}</li>
        ))}
      </ul>

      <h3>El valor total en tu carrito es: </h3>
      <span>{state.total}</span>
    </div>
  );
};

export default Cart;
