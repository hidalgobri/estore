// initial state
//  {
//   itemId: "",
//   cantidad: 0,
// },
const initialState = [];

export default function carritoReducer(state = initialState, action) {
  switch (action.type) {
    case "carrito/anadirItem": {
        return [ ...state, { itemId: action.payload, cantidad: 1}]
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
