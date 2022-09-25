import data from "../data.json"

const dataInicial = data.items.map(item =>{
    return { ...item, enCarrito: false}
})



export default function itemReducer(state=dataInicial, action){
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
        case "item/enCarrito":
        {
            return state.map( (item) =>{
                if (item.id === action.payload){
                    return { ...item, enCarrito: !item.enCarrito }
                }
                return item
            } )
        }
        default: return state
    }
}