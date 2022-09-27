import { Link } from "react-router-dom";
import { HeaderStyle } from "./styles/Header.styled";

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
          <Link to="/carrito">Mi Carrito</Link>
        </li>
      </ul>
    </HeaderStyle>
  );
};

export default Header;
