export default function favoritoReducer(state = [], action) {
  switch (action.type) {
    case "favorito/anadirFavorito": {
      return [
        ...state,
        {
          itemId: action.payload.id,
          img: action.payload.img,
          nombre: action.payload.nombre
        }
      ]
    }
    case "favorito/eliminarFavorito":{
        return state.filter( item => item.itemId !== action.payload)
    }
    default:
      return state
  }
}
