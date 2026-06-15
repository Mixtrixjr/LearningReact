import './App.css'
import { Contador } from './components/contador';
import { Estudiante } from './components/estudiante';

function App(){
  const nombreprofesor: string = "maestro react";
  const año: number = 2026;
  const herramientas: string[] = ["react","node","ts"]
  const listaestudiantes = [
    {id: 1, nombre:"Pedro",carrera:"Artes"},
    {id: 2, nombre:"Juan",carrera:"Humanidades"},
    {id: 3, nombre:"Mateo",carrera:"Ingenieria"} 
  ]
  return (
    
    <div className="Contenedor">
      <h1>Bienvenido al entrenamiento</h1>
       <p>estas aprendiendo con {nombreprofesor} en el año {año}</p>
       <p>las herramientos que aprendere son</p>
       <br />
       <p>{herramientas[0]}</p>
       <br />
       <p>{herramientas[1]}</p>
       <br />
       <p>{herramientas[2]}</p>
       {listaestudiantes.map((estu) => (
  <Estudiante 
    key={estu.id}
    nombre={estu.nombre}
    carrera={estu.carrera}
  />
))}
       <br></br>
       <Contador></Contador>
    </div>
    
  );
}

export default App;
