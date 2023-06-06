import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

import './formulario_styles.css'

const IniciarSesion = () => {

    const { register, formState: {errors} , handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data);

    }

    return <div className="div-formulario" >

        <div>

            <form className="form-formulario-Inicio" onSubmit={ handleSubmit(onSubmit) } >

                <h2>Inicio Sesion</h2> 

                <div>
                    
                    <input type="text" placeholder="Correo" {...register('correo', {

                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

                    } ) } />

                    {errors.correo?.type === 'required' && <p className="errorP" >El correo es requerido</p> }
                    {errors.correo?.type === 'pattern' && <p className="errorP" >El formato del email es incorrecto</p> }

                </div>
                <br/>
                <div>
                    
                    <input type="password" placeholder="Contraseña" {...register('contrasena', {

                        required: true,
                        minLength: 8

                    } ) } />

                    {errors.contrasena?.type === 'required' && <p className="errorP" >La contraseña es requerida</p> }
                    {errors.contrasena?.type === 'minLength' && <p className="errorP" >La contraseña debe tener al menos 8 caracteres</p> }

                </div>

                <br/><input type="submit" value="Iniciar Sesion" />

                <p>¿No tienes una cuenta? <Link to="/CrearCuenta">Crear ahora</Link> </p>
                <Link to="/RecuperarCuenta1">¿Olvidaste tu contraseña?</Link>

            </form>

        </div>

    </div>

}

export default IniciarSesion;