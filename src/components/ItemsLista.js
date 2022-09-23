import { useSelector } from "react-redux";
import { ItemContainer, ItemCard, ComprarButton } from "./styles/Item.styled";

const ItemsLista = () => {
    const items = useSelector(state => state.item)  

    const renderedListItems = items.map(item => {
      return <ItemCard>
        <img src={require("../assets/"+item.img)}></img>
        <h3>{item.nombre}</h3>
        <p>$ {item.precio_kg}</p>
        <ComprarButton>Comprar</ComprarButton>
      </ItemCard>
    })

    return <ItemContainer> {renderedListItems} </ItemContainer>
}



export default ItemsLista