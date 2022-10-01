import data from "./data.json";
import ItemsLista from "./components/ItemsLista";
import Favoritos from "./components/Favoritos";
import Carrito from "./components/Carrito";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<ItemsLista />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </>
  );
}

export default App;
