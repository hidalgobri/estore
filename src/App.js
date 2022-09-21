
import data from "./data.json"
import ItemsLista from "./components/ItemsLista"
import { Routes, Route } from "react-router-dom"


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
