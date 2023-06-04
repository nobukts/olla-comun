import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

const RecuperarCuenta2 = () => {

    const { register, formState: {errors} , handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data);

    }
    

    return <div>

        <h2>Escribir código</h2>
        <form onSubmit={ handleSubmit(onSubmit) } >
            
            <div>
                <p>Escriba el código que le ha llegado a su correo electronico.</p>
                <label>Código</label>
                <input type="text" placeholder="Código" {...register('codigo', {

                    required: true

                } ) } />

                {errors.codigo?.type === 'required' && <p>El código es requerido</p> }

            </div>

            <input type="submit" value="Enviar LINKEARLO A RECUPERAR3"/>

            <p>¿No tienes una cuenta? <Link to="/CrearCuenta">Crear ahora</Link> </p>

        </form>

    </div>

}

export default RecuperarCuenta2;