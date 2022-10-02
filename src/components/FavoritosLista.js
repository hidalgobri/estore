import {useSelector, useDispatch} from "react-redux"
import { FavoritosCard, FavoritosContainer } from "./styles/Favoritos.styled"

const Favoritos = () => {
    const favoritos = useSelector( state => state.favorito)
    const dispatch = useDispatch()

    const favoritosRender = favoritos.map(item => {
        return <FavoritosCard>
            <img
                src={require("../assets/" + item.img)}
                alt={item.nombre}
            />
            <p>{item.nombre}</p>
            <button onClick={ () =>{
                    dispatch({type:"favorito/eliminarFavorito", payload: item.itemId });
                    dispatch({ type: "item/esFavorito", payload: item.itemId });
                }
            }> eliminar </button>
        </FavoritosCard>
    })

    return <FavoritosContainer>
        {favoritosRender}
    </FavoritosContainer>
}

export default Favoritos