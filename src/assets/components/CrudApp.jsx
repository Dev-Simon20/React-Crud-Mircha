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
        data.id=Date.now();
        setDb((db)=>[...db,data])
    }
    const updateData=(data)=>{ 
         let newDb=db.map((inf)=>{
            if(inf.id==data.id){
                inf=data;
            }
            return inf;
         })
         setDb(newDb);
    }
    const deleteData=(id)=>{
        let isDelete=window.confirm(`Esta seguro de eliminar el registro con el id: ${id}`);
        if(isDelete){
            let newDB=db.filter((data)=>data.id!=id);
        console.log(newDB);
        setDb(newDB)
        }
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