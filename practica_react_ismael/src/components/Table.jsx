import React, { useState } from "react";
import { Coche, Moto } from "../data/Vehicles.js";
import vehiculos from "../data/Vehicles.js";
import "../css/table.css"

const Tabla = () => {

  const [datos, setDatos] = useState(vehiculos);

  // Función para filtrar coches
  const onlyCars = () => {
    const filtrados = vehiculos.filter((element) => element instanceof Coche);
    setDatos(filtrados);
  };

  // Función para filtrar motos
  const onlyBikes = () => {
    const filtrados = vehiculos.filter((element) => element instanceof Moto);
    setDatos(filtrados);
  };

  // Función para restablecer
  const restablecerFiltro = () => {
    setDatos(vehiculos);
  };

  // Funcion ordenar alfabeticamnete
  const sort = () => {
    const filtrados = [...datos].sort((a, b) => a.marca.localeCompare(b.marca));
    setDatos(filtrados);
  };

  const sortResverse = () => {
    const filtrados = [...datos].sort((a, b) => a.marca.localeCompare(b.marca));
    filtrados.reverse();
    setDatos(filtrados);
  };

  // Totalizar precio
  const totalizar = () => {
    const total = [...datos].reduce(getSum, 0);
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
          <tbody>
            {datos.map((element, index) => (
              <tr key={index}>
                <td>{element.marca}</td>
                <td>{element.modelo}</td>
                <td>{element.descripcion}</td>
                <td>{element.color}</td>
                <td>{element.precio}</td>
                <td>{element.puertas}</td>
                <td>{element.potencia}</td>
              </tr>
            ))}
          </tbody>
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