
export default function carritoReducer(state = [], action) {
  switch (action.type) {
    case "carrito/anadirItem": {
        return [ ...state, { itemId: action.payload.id,
            img: action.payload.img,
            nombre: action.payload.nombre,
            precio: action.payload.precio_kg,
             cantidad: 1}]
    }
    case "carrito/eliminarItem":{
        return state.filter( item => item.itemId !== action.payload)
    }
    case "carrito/aumentarCantidad":{
        return state.map((item)=> {
            if (item.itemId === action.payload){
                return {...item, cantidad: item.cantidad + 1}
            }
            return item
        })
    }
    case "carrito/disminuirCantidad":{
        return state.map((item)=> {
            if (item.itemId === action.payload){
                return {...item, cantidad: item.cantidad - 1}
            }
            return item
        })
    }
    default:
      return state
  }
}
