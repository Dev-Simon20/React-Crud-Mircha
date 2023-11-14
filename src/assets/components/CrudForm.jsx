import { useState,useEffect } from "react"

const initialForm={
    name:'Nombre',
    constelation:'Constelation'
}


const CrudForm=()=>{
    
    const [form,setForm]=useState(initialForm);
    const handleChange=(e)=>{}
    const handleSubmit=(e)=>{
    
    }
    const handleReset=(e)=>{}
    return(
        <>
        <p>crud Form</p>
        <h3>Agregar</h3>
        <form onSubmit={handleSubmit}>

         <input type="text" name="name" placeholder="Ingrese el nombre" onChange={handleChange} value={form.name}
/>

         <input type="text" name="constelation" placeholder="Ingrese la Constelacion" onChange={handleChange} value={form.constelation}/>

            <input type="submit" value="Enviar"/>
            <input type="reset" value="Limpiar" onClick={handleReset}/>
        </form>
        </>
    )
}

export default CrudForm