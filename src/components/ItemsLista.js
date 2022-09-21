import { ItemContainer, ItemCard, ComprarButton } from "./styles/Item.styled";

export default function ItemsLista(props) {
  const items = props.itemsLista.map((item) => {
    return (
      <ItemCard key={item.id}>
        <img src ={require("../assets/"+item.img)} alt={item.nombre}/>
        <h3>{item.nombre}</h3>
        <h5>{`$ ${item.precio_kg}`}</h5>
        <ComprarButton>Comprar</ComprarButton>
      </ItemCard>
    );
  });

  return (
    <>
      <h1>Items Lista</h1>
      <ItemContainer>{items}</ItemContainer>
    </>
  );
}
