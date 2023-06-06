import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import './formulario_styles.css'

const RecuperarCuenta2 = () => {

    const { register, formState: {errors} , handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data);

    }
    

    return <div className="div-formulario" >

        
        <form  className="form-formulario-Recuperar" onSubmit={ handleSubmit(onSubmit) } >
            
            <h2>Escribir código</h2>

            <div>
                <p>Escriba el código que le ha llegado<br/>a su correo electronico.</p>
                
                <input type="text" placeholder="Código" {...register('codigo', {

                    required: true,
                    minLength: 6

                } ) } />

                {errors.codigo?.type === 'required' && <p className="errorP" >El código es requerido</p> }
                {errors.codigo?.type === 'minLength' && <p className="errorP" >El código debe tener al menos 6 caracteres</p> }

            </div>

            <br/><input type="submit" value="Enviar"/>

            <p>¿No tienes una cuenta? <Link to="/CrearCuenta">Crear ahora</Link> </p>

        </form>

    </div>

}

export default RecuperarCuenta2;