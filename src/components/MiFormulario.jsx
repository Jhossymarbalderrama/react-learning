import React, { useState } from "react";

const MiFormulario = () => {

    /**
     * ? Hook para informacion del Formulario
     */
    const [formData, setFormData] = useState({
        username: '',
        email:'ejemplo@ejemplo.com',
        password: '',
    });
    
    /**
     * ? Capturo los inputs del formulario
     */
    const procesarCambio = (evento) => {
        const { name, value } = evento.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]:value,
        }))
    }
    
    const procesarSubmit = (evento) => {
        evento.preventDefault();
        console.log(formData);           
    }

    /**
     * ? Formulario de Registro
     */
    return (
        <div className="box">
            <form autoComplete="off" onSubmit={procesarSubmit}>
                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={procesarCambio}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={procesarCambio}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={procesarCambio}/>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default MiFormulario;