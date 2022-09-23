
import data from "./data.json"
import ItemsLista from "./components/ItemsLista"
import { Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"

const CarritoCounter = () =>{
  const carrito = useSelector(state => state.carrito)

  return <h1>Carrito contador {carrito.length}</h1>
  


}


function App() {
  
  return (
    <>
      <h1>Hola</h1>
      <CarritoCounter></CarritoCounter>
      <Routes>
        <Route path="/" element={<ItemsLista itemsLista={data.items}/>}/>
      </Routes>
    </>
  );
}

export default App;
