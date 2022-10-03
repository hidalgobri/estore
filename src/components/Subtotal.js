import { useSelector } from "react-redux";
import { SubtotalContainer } from "./styles/Subtotal.styled";

const Subtotal = () => {
  const carritoItems = useSelector((state) => state.carrito);
  const obtenerSubtotal = carritoItems.map((item) => {
    return item.precio * item.cantidad;
  }).reduce( (anterior, actual) => anterior + actual, 0)

  return (
    <SubtotalContainer>
      <h2>Subtotal</h2>
      <h2>$ {obtenerSubtotal}</h2>
    </SubtotalContainer>
  );
};

export default Subtotal;
