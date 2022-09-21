import data from "../data.json"

const initialState = data.items

export default function itemReducer(state=initialState, action){
    switch (action.type){
        case "item/disminuirCantidad":
        {
           
            return state.map( (item) =>{
                if (item.id === action.payload){
                    return {...item, total_kgs: item.total_kgs - 1}
                } 
                return item
            })
        }
        default: return state
    }
}