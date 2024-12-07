import React, { useState, version } from "react";
import List from "./List.jsx";
import { Coche, Moto } from "../data/Vehicles.js";
import vehiculos from "../data/Vehicles.js";
import "../css/table.css"

export function Tabla(props) {

  const [datos, setDatos] = useState(vehiculos);

  // Funcion para eliminar un elemento
  let remove = () => {
    datos.splice(0, 1);
    setDatos([...datos]);
  };

  // Funcion para añadir un elemento
  let add = () => {
    let elem = prompt("Añadir un Coche o Moto");
    elem = elem ? elem.toLowerCase() : "";
    if (elem === "coche") {
      let c = new Coche;
      c.marca = prompt("Marca:")
      c.modelo = prompt("Modelo:")
      c.descripcion = prompt("Descripción")
      c.color = prompt("Color:")
      c.precio = parseFloat(prompt("Precio:"))
      c.puertas = parseInt(prompt("Puertas:"))
      datos.push(c);
      setDatos([...datos]);
    } else if (elem === "moto") {
      let m = new Moto;
      m.marca = prompt("Marca:")
      m.modelo = prompt("Modelo:")
      m.descripcion = prompt("Descripción")
      m.color = prompt("Color:")
      m.precio = parseFloat(prompt("Precio:"))
      m.potencia = parseInt(prompt("Potencia:"))
      datos.push(m);
      setDatos([...datos]);
    } else {
      alert("No se ha podido añadir el vehiculo")
    }
  }

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
              <th>Descripción</th>
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

        <button onClick={remove} className="button">
          Eliminar primer vehiculo
        </button>

        <button onClick={add} className="button">
          Añadir vehiculo
        </button>

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