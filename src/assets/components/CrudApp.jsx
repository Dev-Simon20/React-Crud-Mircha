import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTabtle from "./CrudTable";

// Ejemplo de useState
// const [constante, AgregaValorAlaConmstante]=useState(valor inicial de la constante);
// cont [const, setConst]=use.State(5);

const initialDB=[
    {
        id:1,
        name:'Seiya',
        constelation:'Pegaso'
    },
    {
        id:2,
        name:'Shiryu',
        constelation:'Dragon'
    },
    {
        id:3,
        name:'Hyoga',
        constelation:'Cisne'
    },
    {
        id:4,
        name:'Shun',
        constelation:'Andromeda'
    },
    {
        id:5,
        name:'Ikki',
        constelation:'Fenix'
    }
]
const CrudApp=()=>{
    const [db,setDb]=useState(initialDB);
    const[dataToEdit,setDataToEdit]=useState(null);
    const createData=(data)=>{
        // Se Creara el id obteniedo el nuemro de objetos y sumandole 1
        let idDb=db.length+1;
        let dataProces={
            id:idDb,
            name:data.name,
            constelation:data.constelation
        }
        setDb((db)=>[...db,dataProces])
    }
    const updateData=(data)=>{

    }
    const deleteData=(id)=>{
  
    }
    return(
        <>
        <h2>Crud App</h2>
        <CrudForm 
        createData={createData} 
        updateData={updateData} 
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />

        <CrudTabtle 
        data={db} 
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}>       
        </CrudTabtle>
        </>
    )

}

export default CrudApp;