import { useForm } from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import CorreosRegistrados from "/src/assets/datos/correosRegistrados.json"

const RecuperarCuenta1 = () => {

    const { register, formState: {errors} , handleSubmit } = useForm();

    

    /*function captura(){

        const objeto = {

            correo: document.getElementById("correo").value

        }

        return objeto;
    
    }*/
    const navigate = useNavigate();

    const onSubmit = (data) => {

        console.log(data);
        /*captura();*/
        CorreosRegistrados && CorreosRegistrados.map(CorreosRegistrados => {
            console.log(CorreosRegistrados.correo)
            if(CorreosRegistrados.correo == data.correo){
                navigate("/RecuperarCuenta2");
            }else{
                console.log("no coinciden con los datos guardados");
                return(
                    <div>
                        <p>NO COINCIDEN</p>
                    </div>
                )
            }
          })
        return data;

    }
    

    return <div className="div-formulario" >

        
        <form  className="form-formulario-Recuperar" onSubmit={ handleSubmit(onSubmit) } >
            
            <h2>Recuperar Cuenta</h2>

            <div>
                <p>Si ha olvidado su contraseña, le<br/>enviaremos un correo para restablecerla.</p>
                
                <input type="text" placeholder="Correo" id="correoJSX" {...register('correo', {

                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

                } ) } />

                {errors.correo?.type === 'required' && <p className="errorP" >El correo es requerido</p> }
                {errors.correo?.type === 'pattern' && <p className="errorP"  >El formato del email es incorrecto</p> }

            </div>

            

            <br/><input id="btnRecuperar" type="submit" value="Recuperar"/>
            
            <p>¿No tienes una cuenta? <Link to="/CrearCuenta">Crear ahora</Link> </p>

        </form>

    </div>

}

export default RecuperarCuenta1;