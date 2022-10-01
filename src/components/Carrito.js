import { useSelector } from "react-redux";
import {
  CarritoCard,
  CarritoDescription,
  CarritoContainer,
} from "./styles/Carrito.styled";
import AnadirButtons from "./AnadirButtons";
import Subtotal from "./Subtotal";

const Carrito = () => {
  const carritoItems = useSelector((state) => state.carrito);

  const carritoItemsRender = carritoItems.map((item) => {
    console.log(item);
    return (
      <CarritoCard key={item.itemId}>
        <AnadirButtons itemId={item.itemId} />
        <CarritoDescription>
          <div>
            <h3>{item.nombre}</h3>
            <p>$ {item.precio}</p>
          </div>
          <img src={require("../assets/" + item.img)} />
        </CarritoDescription>
      </CarritoCard>
    );
  });

  return (
    <>
      <CarritoContainer>
        {carritoItemsRender}
        <Subtotal />
      </CarritoContainer>
    </>
  );
};

export default Carrito;
