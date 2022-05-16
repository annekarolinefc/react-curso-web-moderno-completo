export default function BomDia(props){
    return(
        <p>
            <p>Sem props!</p>
            <h1> Bom dia Fulano! </h1>
            <br/>
            <p>Com props!</p>
            <h1> Bom dia {props.name} ! </h1>
        </p>
    )
}
