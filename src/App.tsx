import './App.css'
import { Contador } from './components/contador';
import { Estudiante } from './components/estudiante';
import { Juegos } from './components/juegos';

function App(){
  const nombreprofesor: string = "maestro react";
  const año: number = 2026;
  const herramientas: string[] = ["react","node","ts"]
  const listaestudiantes = [
    {id: 1, nombre:"Pedro",carrera:"Artes"},
    {id: 2, nombre:"Juan",carrera:"Humanidades"},
    {id: 3, nombre:"Mateo",carrera:"Ingenieria"} 
  ]

  const listajuegos = [
    {id: 1, Nombre: "STALKER", Genero:"Shooter", Plataforma:"PC"},
    {id: 1, Nombre: "Age Of Empires", Genero:"RTS", Plataforma:"XBOX"},
    {id: 1, Nombre: "God Of War", Genero:"Aventuras", Plataforma:"PS5"}
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
  />))}
  
  {listajuegos.map((juego)=>(
    <Juegos 
    key={juego.id}
    titulo={juego.Nombre}
    genero={juego.Genero}
    plataforma={juego.Plataforma}>
    </Juegos>
  ))}



       <br></br>
       <Contador></Contador>
    </div>
    
  );
}

export default App;
