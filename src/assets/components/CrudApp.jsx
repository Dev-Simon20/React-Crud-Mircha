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
    return(
        <>
        <h2>Crud App</h2>
        <CrudForm/>
        <CrudTabtle data={db}></CrudTabtle>
        </>
    )

}

export default CrudApp;