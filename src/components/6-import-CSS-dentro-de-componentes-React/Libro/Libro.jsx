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
            <div className="item">
                <Titulo>{libro.titulo}</Titulo>
                <span>Publicado en {libro.publicado}</span>
            </div>
        </>
    )
}

export default Libro