import Tabla from "../components/Table.jsx"
import { useState } from "react";
import "../css/table.css"

const Container = () => {

    let [titol, setTitol] = useState("VEHICLES");
    const canviTitol = () => {
        let tt = prompt("Nou titol:")
        if (tt) {
            setTitol(tt);
        }
    }

    return (
        <>
            <h1 onClick={canviTitol} className="title">{titol}</h1>
            <Tabla />
        </>
    )
}

export default Container