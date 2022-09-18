import Item from "./Item";

export default function ItemsLista(props) {

    const items = props.itemsLista.map( (item) => {
        return (
        <Item
            key = {item.id}
            urlImg = {item.img}
            nombre = {item.nombre}
            precio = {item.precio_kg}
        />)
   })

  return (
  <>
    <h1>Items Lista</h1>
    <div className="items-lista">
        {items}
    </div>
  </>)
}
