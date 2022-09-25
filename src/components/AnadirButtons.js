import { AnadirButtonsContainer } from "./styles/AnadirButtons.styled"
import { useSelector, useDispatch } from "react-redux";

const AnadirButtons= (props) => {
    const carrito = useSelector( (state) => state.carrito)
    const dispatch = useDispatch()

    const itemCarrito = carrito.find( item => item.itemId === props.itemId)

    return <AnadirButtonsContainer>
        <button> eliminar </button>
        <h3>{itemCarrito.cantidad}</h3>
        <button 
            onClick={ ()=>{ dispatch({type: 'carrito/aumentarCantidad', payload:props.itemId })}
            }> + </button>
    </AnadirButtonsContainer>
}

export default AnadirButtons