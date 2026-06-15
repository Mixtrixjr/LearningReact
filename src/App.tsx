import './App.css'
import { Contador } from './components/contador';
import { Estudiante } from './components/estudiante';

function App(){
  const nombreprofesor: string = "maestro react";
  const año: number = 2026;
  const herramientas: string[] = ["react","node","ts"]

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
       <Estudiante nombre='Pedro' carrera='Ingenieria'></Estudiante>
       <Estudiante nombre='Jair' carrera='Humanidades'></Estudiante>
       <br></br>
       <Contador></Contador>
    </div>
    
  );
}

export default App;
