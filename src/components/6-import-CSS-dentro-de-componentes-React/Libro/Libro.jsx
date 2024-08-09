import React from "react";
import './Libro.css';    // ? Vincular CSS arhivo css a jsx

const Libro = ({libro}) => {

    return (
        <>
            <div>
                <h2>{libro.titulo}</h2>
                <span>Publicado en {libro.publicado}</span>
            </div>
        </>
    )
}

export default Libro