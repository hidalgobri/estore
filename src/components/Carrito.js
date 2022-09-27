import {useSelector, useDispatch} from "react-redux"
import { CardContainer, CardDescription } from "./styles/Carrito.styled"
import AnadirButtons from "./AnadirButtons"

const Carrito = () => {

    const carritoItems = useSelector( (state) => state.carrito)

    const carritoItemsRender = carritoItems.map( item => {
        console.log("aqui",item)
        return <CardContainer key={item.itemId}>
            <AnadirButtons itemId={item.itemId} />
            <CardDescription>
                <h3>{item.nombre}</h3>
                <img src={require("../assets/" + item.img)}/>
            </CardDescription>
            
        </CardContainer>
    }

    )

    return carritoItemsRender
}

export default Carrito