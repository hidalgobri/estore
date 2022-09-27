import { useSelector } from "react-redux";
import { CardContainer, CardDescription } from "./styles/Carrito.styled";
import AnadirButtons from "./AnadirButtons";
import Subtotal from "./Subtotal";

const Carrito = () => {
  const carritoItems = useSelector((state) => state.carrito);
  console.log(carritoItems);
  const carritoItemsRender = carritoItems.map((item) => {
    return (
      <CardContainer key={item.itemId}>
        <AnadirButtons itemId={item.itemId} />
        <CardDescription>
          <div>
            <h3>{item.nombre}</h3>
            <h3>$ {item.precio}</h3>
          </div>
          <img src={require("../assets/" + item.img)} />
        </CardDescription>
      </CardContainer>
    );
  });

  return (
    <>
      {carritoItemsRender}
      <Subtotal />
    </>
  );
};

export default Carrito;
