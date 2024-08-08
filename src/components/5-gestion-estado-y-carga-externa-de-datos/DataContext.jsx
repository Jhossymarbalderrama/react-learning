import React, { createContext,useState, useEffect } from "react";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    /**
     * useEffect: Solo se va ejecutar solo si...
     * sucede algo (modifique, agrege, propiedad ('prop') etc)
     * 
     * prop: cuando se actualiza
     * []: dejando solo esto, se actualiza cuando se carga el componente
     */
    useEffect(() => {
        fetch('../public/productos.json')
            .then(res => res.json())
            .then(datos => setData(datos))
            .catch(error => console.error('Error, fetching data: ', error))
    }, [])


    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}