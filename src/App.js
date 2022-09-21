
import data from "./data.json"
import ItemsLista from "./components/ItemsLista"
import { Routes, Route } from "react-router-dom"
import store from './store'


const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

store.dispatch({ type: 'carrito/anadirItem"', payload: "1" })




unsubscribe()

function App() {
  
  return (
    <>
      <h1>Hola</h1>

      <Routes>
        <Route path="/" element={<ItemsLista itemsLista={data.items}/>}/>
      </Routes>
    </>
  );
}

export default App;
