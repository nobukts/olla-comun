import { useForm } from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import './formulario_styles.css'

const RecuperarCuenta3 = () => {

    const navigate = useNavigate();

    const { register, formState: {errors} , watch, handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data);
        alert("Redirigiendo a la siguiente pagina");
        navigate("/IniciarSesion");
        

    }
    

    return <div className="div-formulario" >

        
        <form className="form-formulario-Recuperar" onSubmit={ handleSubmit(onSubmit) } >
            
            <h2>Cambiar contraseña</h2>

            <div>
                <p>Escriba su nueva contraseña.</p>

                <input type="password" placeholder="Nueva contraseña" {...register('newContra', {

                    required: true,
                    minLength: 8

                } ) } />

                {errors.newContra?.type === 'required' && <p className="errorP" >La contraseña es requerida</p> }
                {errors.newContra?.type === 'minLength' && <p className="errorP" >La contraseña debe tener al menos 8 caracteres</p> }

            </div>
                <br/>
            <div>
            
                <input type="password" placeholder="Confirmar Contraseña" {...register('confNewContra', {

                    required: true,
                    validate: (val = /*string*/ watch('newContra') ) => { 

                        if (watch ('newContra') !=val ) {

                            return "Las contraseñas no coinciden";

                        }

                     }

                } ) } />

                

                {errors.confNewContra?.type === 'required' && <p className="errorP" >La contraseña es requerida</p> }
                {errors.confNewContra && <p className="errorP" >Las contraseñas no coinciden</p> }

            </div>

            <br/><input type="submit" value="Cambiar"/>
                
            <p>¿No tienes una cuenta? <Link to="/CrearCuenta">Crear ahora</Link> </p>

        </form>

    </div>

}

export default RecuperarCuenta3;