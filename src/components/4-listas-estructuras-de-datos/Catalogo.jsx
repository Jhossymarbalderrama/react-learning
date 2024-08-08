import React from "react";

const Catalogo = () => {

    const productos = [
        {
            id: 1, nombre: 'Camiseta', precio: 20.99
        },
        {
            id: 2, nombre: 'Pantalón', precio: 35.50
        },
        {
            id: 3, nombre: 'Zapatos', precio: 60.00
        },
        {
            id: 4, nombre: 'Bolso', precio: 25.75
        },
        {
            id: 5, nombre: 'Gorra', precio: 15.00
        },
        {
            id: 6, nombre: 'Calcetines', precio: 5.00
        },
    ]

    return (
        <>
            <h2>Catálogo de Productos</h2>

            {/* Bloque Condicional por si la lista esta vacia */}
            {productos.length === 0 ? (
                <p>No hay productos disponibles en el catálogo.</p>
            ) : (
                <ul>
                    {productos.map(pd => (
                        <li key={pd.id}><b>{pd.nombre}</b> - ${pd.precio}</li>
                    ))}
                </ul>
            )}


        </>
    );
};

export default Catalogo;