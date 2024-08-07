import React, { useState } from "react";

const MiFormulario = () => {

    const [formData, setFormData] = useState({
        username: '',
        email:'ejemplo@ejemplo.com',
        password: '',
    });
    
    const activarPorEvento = (evento) => {
        console.log("Evento Activado", evento.type)
    }

    const inputActivado = (evento) => {
        evento.stopPropagation()
        console.log("Input Activado", evento.type)
    }

    const formularioActivado = (evento) => {
        console.log("Formulario Activado", evento.type)
    }

    return (
        <div className="box">
            <form autoComplete="off">
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" name="username" value={formData.username}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="mail" id="email" name="email" value={formData.email}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password}/>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default MiFormulario;