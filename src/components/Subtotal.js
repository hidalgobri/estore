import { useSelector } from "react-redux";

const Subtotal = () => {
  const carritoItems = useSelector((state) => state.carrito);
  const obtenerSubtotal = carritoItems.map((item) => {
    return item.precio * item.cantidad;
  }).reduce( (anterior, actual) => anterior + actual, 0)

  return (
    <>
      <h2>Subtotal</h2>
      <p>$ {obtenerSubtotal}</p>
    </>
  );
};

export default Subtotal;
