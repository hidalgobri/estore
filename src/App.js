import data from "./data.json";
import ItemsLista from "./components/ItemsLista";
import FavoritosLista from "./components/FavoritosLista";
import CarritoLista from "./components/CarritoLista";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<ItemsLista />} />
        <Route path="/favoritos" element={<FavoritosLista />} />
        <Route path="/carrito" element={<CarritoLista />} />
      </Routes>
    </>
  );
}

export default App;
