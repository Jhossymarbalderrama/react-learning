import React from "react";

const MiFormulario = () => {

    const activarPorEvento = (evento) => {
        console.log("Evento Activado", evento.type)
    }

    return (
        <div className="box">
            <form autoComplete="off">
                <div>
                    <label htmlFor="username" onMouseOver={activarPorEvento}>Usuario:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="mail" id="email" name="email" onChange={activarPorEvento}/>
                </div>
                <div>
                    <label htmlFor="password" onClick={activarPorEvento}>Password:</label>
                    <input type="password" id="password" name="password" />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default MiFormulario;