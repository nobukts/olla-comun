import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

const IniciarSesion = () => {

    const { register, formState: {errors} , handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data);

    }

    return <div>

        <h2>Inicio Sesion</h2>

        <form onSubmit={ handleSubmit(onSubmit) } >

            <div>
                <label>Correo</label>
                <input type="text" placeholder="Correo" {...register('correo', {

                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

                } ) } />

                {errors.correo?.type === 'required' && <p class="errorP" >El correo es requerido</p> }
                {errors.correo?.type === 'pattern' && <p class="errorP" >El formato del email es incorrecto</p> }

            </div>

            <div>
                <label>Contraseña</label>
                <input type="password" placeholder="Contraseña" {...register('contrasena', {

                    required: true,
                    minLength: 8

                } ) } />

                {errors.contrasena?.type === 'required' && <p class="errorP" >La contraseña es requerida</p> }
                {errors.contrasena?.type === 'minLength' && <p class="errorP" >La contraseña debe tener al menos 8 caracteres</p> }

            </div>

            <input type="submit" value="Iniciar Sesion" />

            <p>¿No tienes una cuenta? <Link to="/CrearCuenta">Crear ahora</Link> </p>
            <Link to="/RecuperarCuenta1">¿Olvidaste tu contraseña?</Link>

        </form>

    </div>

}

export default IniciarSesion;