import React from "react";
import './Libro.css';    // ? Vincular CSS arhivo css a jsx
import styled from 'styled-components'; // ? Libreria Estilos para componentes

const Libro = ({ libro }) => {

    const Titulo = styled.h2`    
            display: block;
            padding: 0;
            margin: 0;
            flex-basis: 100%;      
    `

    return (
        <>
            <div className="card col-md-3">
                <div className="card-body">
                    <h5 className="card-title">
                       {libro.titulo}
                    </h5>
                    <p className="card-text">Publicado en {libro.publicado}</p>
                </div>
            </div>
        </>
    )
}

export default Libro