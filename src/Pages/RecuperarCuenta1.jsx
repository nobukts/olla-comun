import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

const RecuperarCuenta1 = () => {

    const { register, formState: {errors} , handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data);

    }
    

    return <div>

        <h2>Recuperar Cuenta</h2>
        <form onSubmit={ handleSubmit(onSubmit) } >
            
            <div>
                <p>Si ha olvidado su contraseña, le enviaremos un correo para restablecerla.</p>
                <label>Correo</label>
                <input type="text" placeholder="Correo" {...register('correo', {

                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

                } ) } />

                {errors.correo?.type === 'required' && <p class="errorP" >El correo es requerido</p> }
                {errors.correo?.type === 'pattern' && <p class="errorP"  >El formato del email es incorrecto</p> }

            </div>

            <input type="submit" value="Recuperar LINKEARLO A RECUPERAR2"/>

            <p>¿No tienes una cuenta? <Link to="/CrearCuenta">Crear ahora</Link> </p>

        </form>

    </div>

}

export default RecuperarCuenta1;