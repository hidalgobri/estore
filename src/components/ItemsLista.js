import { useSelector, useDispatch } from "react-redux";
import { ItemContainer, ItemCard, ComprarButton } from "./styles/Item.styled";
import AnadirButtons from "./AnadirButtons";
import heartSVG from "../assets/heart.svg";
import heartFillSVG from "../assets/fill-heart.svg";

const ItemsLista = () => {
  const items = useSelector((state) => state.item);
  const dispatch = useDispatch();

  const renderedListItems = items.map((item) => {
    console.log();
    return (
      <ItemCard key={item.id}>
        {item.esFavorito === true ? (
          <img
            className="corazon"
            onClick={() => {
              dispatch({ type: "favorito/eliminarFavorito", payload: item.id });
              dispatch({ type: "item/esFavorito", payload: item.id });
            }}
            src={heartFillSVG}
            alt="favorito"
            ></img>
            ) : (
              <img className="corazon" 
              onClick={() => {
                dispatch({ type: "favorito/anadirFavorito", payload: item });
                dispatch({ type: "item/esFavorito", payload: item.id });
            }}
            src={heartSVG}
            alt="favorito"
            ></img>
        )}
        <img
          className="itemImg"
          src={require("../assets/" + item.img)}
          alt={item.nombre}
        ></img>
        <h3>{item.nombre}</h3>
        <p>$ {item.precio_kg}</p>
        {item.enCarrito ? (
          <AnadirButtons key={item.id} itemId={item.id}></AnadirButtons>
        ) : (
          <ComprarButton
            onClick={() => {
              dispatch({ type: "item/enCarrito", payload: item.id });
              dispatch({ type: "carrito/anadirItem", payload: item });
            }}
          >
            Comprar
          </ComprarButton>
        )}
      </ItemCard>
    );
  });

  return <ItemContainer> {renderedListItems} </ItemContainer>;
};

export default ItemsLista;
