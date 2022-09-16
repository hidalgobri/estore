const initialState = {
  idFavs: [],
};

export default function favoritoReducer(state = initialState, action) {
  switch (action.type) {
    case "favorito/anadirFavorito": {
      return {
        idFavs: [...state.idFavs, action.payload]
      };
    }
    case "favorito/eliminarFavorito":{
        return {
            idFavs: state.idFavs.filter(fav => fav !== action.payload )
        }
    }
  }
}
