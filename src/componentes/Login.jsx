import { useState } from 'react'

import FormularioRegistro from "./FormularioRegistro";


const usuarios = [
    { nombreUsuario: 'usuario1', contrasena: 'contraseña1' },
    { nombreUsuario: 'u24255', contrasena: 'Jair29@' },
    { nombreUsuario: 'usuario3', contrasena: 'contraseña3' },
    { nombreUsuario: 'usuario4', contrasena: 'contraseña4' },
    { nombreUsuario: 'usuario5', contrasena: 'contraseña5' }
]
let intento = 0


const Login = () => {
    const [nombreUsuario, setNombreUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [mostrarRegistro, setMostrarRegistro] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena
        )
        if (usuarioEncontrado) {
            alert(`¡Bienvenido ${usuarioEncontrado.nombreUsuario}`)
        } else {
            intento++
            if (intento < 2) {
                alert('Usuario y/o constraseña incorrectos')
            } else {
                alert('Credenciales incorrectas,por favor pasar a registrarse')
                setMostrarRegistro(true)
            }
        }

    }
    return (
        <div className='inicio-sesion' id='login'>
            {!mostrarRegistro ? (
                <form className='formulario' onSubmit={handleSubmit}>
                    <h2 className='titulo'>Iniciar Sesion</h2>
                    <div  className='usuario'>
                        <label className='etiqueta' htmlFor="iusuario">Usuario:</label>
                        <input className='input-login'
                            type="texto"
                            id="iusuario"
                            name="nombreUsuario"
                            placeholder="Ingresar nombre usuario"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)} />
                    </div>
                    <div className='usuario'>
                        <label className='etiqueta' htmlFor="ipassword">Contraseña:</label>
                        <input className='input-login'
                            type="password"
                            id="ipassword"
                            name="constraseña"
                            placeholder="Ingresar contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)} />
                    </div>
                    <button className='boton-login' type="submit">
                        Ingresar
                    </button>
                </form>
            ) : (
                <FormularioRegistro />
            )}
        </div>
    )
}
export default Login;