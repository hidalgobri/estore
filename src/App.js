
import data from "./data.json"
import ItemsLista from "./components/ItemsLista"
import { Routes, Route } from "react-router-dom"
import store from './store'

// Log the initial state
console.log('Initial state: ', store.getState())
// {todos: [....], filters: {status, colors}}

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

// Now, dispatch some actions

store.dispatch({ type: 'item/disminuirCantidad"', payload: '1' })
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
