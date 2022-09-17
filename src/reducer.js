import { combineReducers } from "redux"
import carritoReducer from "./features/carritoSlide"
import favoritoReducer from "./features/favoritoSlide"


 const rootReducer = combineReducers(
 {
      carrito: carritoReducer,
      favorito: favoritoReducer
   }
)

export default rootReducer