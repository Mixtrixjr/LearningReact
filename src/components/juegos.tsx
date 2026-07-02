 import { juegos } from "../interfaces/interfaces";

export function select (nombre: string)
{
   return alert(`Juego ${nombre} Seleccionado`)
}

export function Juegos(props: juegos )
{
    return(
    <div>
        <h3>Juego # {props.id}</h3>
        <p>Titulo: {props.titulo}</p>
        <p>Genero: {props.genero}</p>
        <p>Plataforma: {props.plataforma}</p>
        <button onClick={()=>props.seleccionado(props.titulo)} ></button>
    </div>
    )
}