import { AnadirButtonsContainer } from "./styles/AnadirButtons.styled"
import { useSelector, useDispatch } from "react-redux";

const AnadirButtons= (props) => {
    const carrito = useSelector( (state) => state.carrito)
    const dispatch = useDispatch()

    const itemSelected = carrito.find( item => item.itemId === props.itemId)

    return <AnadirButtonsContainer>
        { itemSelected.cantidad === 1 
            ? 
            <button 
                className="eliminarButton"
                onClick={
                () => {
                    dispatch({type:'item/enCarrito', payload:props.itemId  }) 
                    dispatch({type: 'carrito/eliminarItem', payload:props.itemId })
                }
            }> eliminar </button> 
            :
            <button 
                className="menosButton"
                onClick={  
                    () => { dispatch({type: 'carrito/disminuirCantidad', payload:props.itemId })}
                }
            > - </button>
        }
        
        <h3>{itemSelected.cantidad}</h3>
        <button
            className="masButton" 
            onClick={ ()=>{ dispatch({type: 'carrito/aumentarCantidad', payload:props.itemId })}
            }> + </button>
    </AnadirButtonsContainer>
}

export default AnadirButtons