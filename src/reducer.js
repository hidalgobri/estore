import { combineReducers } from "redux"
import carritoReducer from "./features/carritoSlide"
import favoritoReducer from "./features/favoritoSlide"
import itemReducer from "./features/itemSlide"


 const rootReducer = combineReducers(
 {
      items: itemReducer,
      carrito: carritoReducer,
      favorito: favoritoReducer
   }
)

export default rootReducer