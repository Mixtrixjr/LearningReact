import { useState } from "react"

export function Contador()
{
    const [cuenta, setCuenta ] = useState<number>(0)

function manejarcuenta(numero:number) {
    return setCuenta(cuenta + numero) 
}

    return(
    <div>
        <h3>Contador</h3>

        <p>Usted ha aumentado el contador en {cuenta}</p>

        <button onClick={()=>manejarcuenta(+1)}>Aumentar +1</button>

        <button onClick={()=>manejarcuenta(-1)}>Restar -1</button>
    </div>
    )
}