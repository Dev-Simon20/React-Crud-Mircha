import CrudTableRow from "./CrudTableRow"

const CrudTable=({data})=>{
    return(
        <>

        <h3>Tabla de Datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Constelation</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length===0? <tr><td colSpan="3">SinDatos</td></tr>:data.map((data,index)=>(
                    <CrudTableRow name={data.name} constelation={data.constelation} key={index}></CrudTableRow>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default CrudTable