export default function Item(props){

    console.log(props.img)
    return <>
        <img src={require("../assets/"+props.urlImg)} alt={props.nombre}/>
        <p>{props.nombre}</p>
        <p>{props.precio}</p>
    </>
}