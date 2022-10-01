import { Link } from "react-router-dom";
import { HeaderStyle, MiCarritoHeader } from "./styles/Header.styled";
import { useSelector } from "react-redux";

const CarritoCounter = () => {
  const carrito = useSelector((state) => state.carrito)
  const totalItems = carrito.map(item => item.cantidad)
    .reduce((anterior, actual) => anterior + actual,0)

  return <MiCarritoHeader>Mi carrito { 
                    carrito.length === 0 
                    ?
                    "" 
                    :
                    `( ${totalItems} )`
                  }</MiCarritoHeader>;
};

const Header = () => {
  return (
    <HeaderStyle>
        <h1>Super tienda React!</h1>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/favoritos">Favoritos</Link>
        </li>
        <li>
          <Link to="/carrito"><CarritoCounter/></Link>
        </li>
      </ul>
    </HeaderStyle>
  );
};

export default Header;
