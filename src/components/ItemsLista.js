import { useSelector,useDispatch } from "react-redux";
import { ItemContainer, ItemCard, ComprarButton } from "./styles/Item.styled";

const ItemsLista = () => {
    const items = useSelector(state => state.item) 
    const dispatch = useDispatch() 
  
    const renderedListItems = items.map(item => {
      return <ItemCard key={item.id}>
        <img src={require("../assets/"+item.img)}></img>
        <h3>{item.nombre}</h3>
        <p>$ {item.precio_kg}</p>
        <ComprarButton onClick={() => {dispatch({type: "carrito/anadirItem", payload: item.id} )} }>Comprar</ComprarButton>
      </ItemCard>
    })

    return <ItemContainer> {renderedListItems} </ItemContainer>
}



export default ItemsLista