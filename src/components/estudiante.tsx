import { estudiante } from "../interfaces/interfaceestudiante";

export function Estudiante(props: estudiante )
{
    return(
    <div>
        <h2>Nombre: {props.nombre}</h2>
        <p>Carrera: {props.carrera}</p>
    </div>
    )
}