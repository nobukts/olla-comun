import { useForm } from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import $ from "jquery";

const RecuperarCuenta1 = () => {

    const { register, formState: {errors} , handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (datosForm) => {

        var dato1=datosForm.correo;
    
        var url="http://localhost:5001";
        $.ajax({
            data: JSON.stringify({"email":dato1}),
            contentType: "application/json",
            type: "POST",
            dataType: "json",
            url: url+"/recuperarCuenta1",
        })
        .done(function( data, textStatus, jqXHR ) {
            console.log("data del .done: ",data);

            if(!data.error){navigate("/RecuperarCuenta2");}
            else{
                $(".testprueba").text(data.mensaje);
                $(".testprueba").addClass("alert alert-danger");
            }
            
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            if ( console && console.log ) {
                console.log( "La solicitud a fallado: " +  textStatus);
            }
        });

    }
    

    return <div className="div-formulario" >

        
        <form  className="form-formulario-Recuperar" onSubmit={ handleSubmit(onSubmit) } >
            
            <h2>Recuperar Cuenta</h2>
            <div className="testprueba"></div>

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