import { useSelector } from "react-redux";
import {
  CarritoCard,
  CarritoDescription,
  CarritoListContainer,
  CarritoContainer
} from "./styles/Carrito.styled";
import AnadirButtons from "./AnadirButtons";
import Subtotal from "./Subtotal";


const Carrito = () => {
  const carritoItems = useSelector((state) => state.carrito);
  console.log(carritoItems)

  const carritoItemsRender = carritoItems.map((item) => {
    return (
      <CarritoCard key={item.itemId}>
        <AnadirButtons itemId={item.itemId} />
        <CarritoDescription>
          <div>
            <h3>{item.nombre}</h3>
            <p>$ {item.precio}</p>
          </div>
          <img src={require("../assets/" + item.img)} alt={item.nombre} />
        </CarritoDescription>
      </CarritoCard>
    );
  });

  return (
    <CarritoContainer>
      <Subtotal />  
      <CarritoListContainer>
        {
          carritoItems.length === 0 
          ?
          <h2>¡Sin productos en el carrito!</h2>
          :
          carritoItemsRender
        }
      </CarritoListContainer>
     
    </CarritoContainer>
  );
};

export default Carrito;
