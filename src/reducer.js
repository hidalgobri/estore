import { combineReducers } from "redux"
import carritoReducer from "./features/carritoSlide"
import favoritoReducer from "./features/favoritoSlide"
import itemReducer from "./features/itemSlide"


 const rootReducer = combineReducers(
 {
      item: itemReducer,
      carrito: carritoReducer,
      favorito: favoritoReducer
   }
)

export default rootReducer