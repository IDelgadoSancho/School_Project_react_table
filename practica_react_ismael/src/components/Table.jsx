import React, { useState } from "react";
import List from "./List.jsx";
import { Coche, Moto } from "../data/Vehicles.js";
import vehiculos from "../data/Vehicles.js";
import "../css/table.css"

export function Tabla(props){

  const [datos, setDatos] = useState(vehiculos);

  // Función para filtrar coches
  let onlyCars = () => {
    let filtrados = vehiculos.filter((element) => element instanceof Coche);
    setDatos(filtrados);
  };

  // Función para filtrar motos
  let onlyBikes = () => {
    let filtrados = vehiculos.filter((element) => element instanceof Moto);
    setDatos(filtrados);
  };

  // Función para restablecer
  let restablecerFiltro = () => {
    setDatos(vehiculos);
  };

  // Funcion ordenar alfabeticamnete
  let sort = () => {
    let filtrados = [...datos].sort((a, b) => a.marca.localeCompare(b.marca));
    setDatos(filtrados);
  };

  let sortResverse = () => {
    let filtrados = [...datos].sort((a, b) => a.marca.localeCompare(b.marca));
    filtrados.reverse();
    setDatos(filtrados);
  };

  // Totalizar precio
  let totalizar = () => {
    let total = [...datos].reduce(getSum, 0);
    function getSum(total, obj) {
      return total + obj.precio;
    }
    document.getElementById("total").innerHTML = total;
  };

  return (
    <>
      <div className="table-container" >
        <table className="table">
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Tipo</th>
              <th>Color</th>
              <th>Precio</th>
              <th>Puertas</th>
              <th>Potencia</th>
            </tr>
          </thead>
          <List data={datos}></List>
        </table>
      </ div>

      <div className="button-container">

        <button onClick={onlyCars} className="button">
          Filtrar Coches
        </button>

        <button onClick={onlyBikes} className="button">
          Filtrar Motos
        </button>

        <button onClick={sort} className="button">
          Ordenar A -{">"} Z
        </button>

        <button onClick={sortResverse} className="button">
          Ordenar Z -{">"} A
        </button>

        <button onClick={restablecerFiltro} className="button">
          Restablecer
        </button>

        <button onClick={totalizar} className="button">
          Totalizar
        </button>

        <div id="total" className="total">0</div>
      </div>
    </>
  );
}

export default Tabla;


// {datos.map((element, index) => (
//   <tr key={index}>
//     <td>{element.marca}</td>
//     <td>{element.modelo}</td>
//     <td>{element.descripcion}</td>
//     <td>{element.color}</td>
//     <td>{element.precio}</td>
//     <td>{element.puertas}</td>
//     <td>{element.potencia}</td>
//   </tr>
// ))}