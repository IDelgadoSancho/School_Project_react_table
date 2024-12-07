export default function List(props) {
    return <tbody>
            {props.data.map((element, index) => (
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
}