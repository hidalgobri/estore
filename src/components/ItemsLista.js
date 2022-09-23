import { useSelector } from "react-redux";
// import { ItemContainer, ItemCard, ComprarButton } from "./styles/Item.styled";

const selectItems = state => state.item
console.log(selectItems)

const ItemsLista = () => {
  console.log("aquiuiii")
  const todos = useSelector(selectItems)
  console.log("typeof todos")
  // since `todos` is an array, we can loop over it
  const renderedListItems = todos.map(todo => {
    console.log(todo)
    return <p>{todo.id}</p>
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default ItemsLista