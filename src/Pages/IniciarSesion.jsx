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
                <input type="text" {...register('correo', {

                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

                } ) } />

                {errors.correo?.type === 'required' && <p>El correo es requerido</p> }
                {errors.correo?.type === 'pattern' && <p>El formato del email es incorrecto</p> }

            </div>

            <div>
                <label>Contraseña</label>
                <input type="password" {...register('contrasena', {

                    required: true

                } ) } />

                {errors.contrasena?.type === 'required' && <p>La contraseña es requerida</p> }

            </div>

            <input type="submit" value="Iniciar Sesion" />

            <p>¿No tienes una cuenta? <Link to="/CrearCuenta">Crear ahora</Link> </p>
            <Link to="/RecuperarCuenta1">¿Olvidaste tu contraseña?</Link>

        </form>

    </div>

}

export default IniciarSesion;