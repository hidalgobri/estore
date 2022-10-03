import { NavLink } from "react-router-dom";
import { HeaderStyle, OpcionesHeader } from "./styles/Header.styled";
import { useSelector } from "react-redux";

const FavoritosCounter = () =>{
  const totalFavoritos = useSelector((state) => state.favorito.length)

  return <OpcionesHeader>
    Favorito
    {
      totalFavoritos === 0
      ?
      ""
      :
      ` ( ${totalFavoritos} )`
    }
  </OpcionesHeader>
}

const CarritoCounter = () => {
  const carrito = useSelector((state) => state.carrito)

  const totalItems = carrito.map(item => item.cantidad)
  .reduce((anterior, actual) => anterior + actual,0)

  return <OpcionesHeader>Mi carrito { 
                    carrito.length === 0 
                    ?
                    "" 
                    :
                    `( ${totalItems} )`
                  }</OpcionesHeader>;
};

const Header = () => {
  return (
    <HeaderStyle>
        <h1>Super tienda React!</h1>
      <ul>
        <li>
          <NavLink style={({isActive}) => { return isActive ? {color: "#FF69B4"} : {} }} to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => { return isActive ? {color: "#FF69B4"} : {} }} to="/favoritos"><FavoritosCounter/></NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => { return isActive ? {color: "#FF69B4"} : {} }} to="/carrito"><CarritoCounter/></NavLink>
        </li>
      </ul>
    </HeaderStyle>
  );
};

export default Header;
