import data from "./data.json";
import ItemsLista from "./components/ItemsLista";
import Favoritos from "./components/Favoritos";
import Carrito from "./components/Carrito";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
const CarritoCounter = () => {
  const carrito = useSelector((state) => state.carrito);

  return <h1>Carrito contador {carrito.length}</h1>;
};

function App() {
  return (
    <>
      <h1>Hola</h1>
      <Header></Header>
      <CarritoCounter></CarritoCounter>
      <Routes>
        <Route path="/" element={<ItemsLista />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </>
  );
}

export default App;
