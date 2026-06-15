import { useState } from "react"

export function Contador()
{
    const [cuenta, setCuenta ] = useState<number>(0)

function manejarcuenta(numero:number) {
     setCuenta(cuenta + numero) 
}

    return(
    <div>
        <h3>Contador</h3>

        <p style={{color:cuenta > 0 ? "green": cuenta < 0 ?"red": "black" }}>Usted ha aumentado el contador en {cuenta}</p>

        <button onClick={()=>manejarcuenta(+1)}>Aumentar +1</button>

        <button onClick={()=>manejarcuenta(-1)}>Restar -1</button>
    </div>
    )
}