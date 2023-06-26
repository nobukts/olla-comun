import { useForm } from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import "./formulario_styles.css";
import $ from "jquery";

const CrearCuenta = () => {

    const { register, formState: {errors} , watch, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (datosForm) => {
        var dato1=datosForm.correo;
        var dato2=datosForm.nombre;
        var dato3=datosForm.telefono;
        var dato4=datosForm.contrasena;
    
        var url="http://localhost:5001";
        $.ajax({
            data: JSON.stringify({"email":dato1,"nombre":dato2,"telefono":dato3,"password":dato4}),
            contentType: "application/json",
            type: "POST",
            dataType: "json",
            url: url+"/crearusuario",
        })
        .done(function( data, textStatus, jqXHR ) {
            /* console.log("data del .done: ",data); */
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            if ( console && console.log ) {
                console.log( "La solicitud a fallado: " +  textStatus);
            }
        });

        
        navigate("/");        
        alert("Se ha añadido el usuario a la página!");

    }
    
    return <div className="div-formulario" >

        
        <form id="formulario" className="form-formulario-Crear" onSubmit={ handleSubmit(onSubmit) } >

            <h2>Crear Cuenta</h2>

            <div>
                
                <input id="nombre" name="nombre" type="text" placeholder="Nombre" {...register('nombre', {

                    required: true,
                    
                } ) } />

                {errors.nombre?.type === 'required' && <p className="errorP">El nombre es requerido</p> }

            </div>
            <br/>
            <div>
                
                <input id="correo" name="correo" type="text" placeholder="Correo" {...register('correo', {

                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i

                } ) } />

                {errors.correo?.type === 'required' && <p className="errorP" >El correo es requerido</p> }
                {errors.correo?.type === 'pattern' && <p className="errorP" >El formato del email es incorrecto</p> }

            </div>
            <br/>
            <div>
                
                <input id="telefono" name="telefono" type="text" placeholder="Telefono (+56987654321)" {...register('telefono', {

                    required: true,
                    pattern: /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/
                    
                } ) } />

                {errors.telefono?.type === 'required' && <p className="errorP" >El telefono es requerido</p> }
                {errors.telefono?.type === 'pattern' && <p className="errorP" >El formato del telefono es incorrecto (+56987654321)</p> }

            </div>
            <br/>
            <div>
                
                <input id="password" name="password" type="password" placeholder="Contraseña"  {...register('contrasena', {

                    required: true,
                    minLength: 8

                } ) } />

                {errors.contrasena?.type === 'required' && <p className="errorP" >La contraseña es requerida</p> }
                {errors.contrasena?.type === 'minLength' && <p className="errorP" >La contraseña debe tener al menos 8 caracteres</p> }

            </div>
            <br/>
            <div>
            
                
                <input id="repassword" name="repassword" type="password" placeholder="Confirmar Contraseña" {...register('confContrasena', {

                    required: true,
                    validate: (val = /*string*/ watch('confContrasena') ) => { 

                        if (watch ('contrasena') !=val ) {

                            return "Las contraseñas no coinciden";

                        }

                     }

                } ) } />

                

                {errors.confContrasena?.type === 'required' && <p className="errorP" >La contraseña es requerida</p> }
                {errors.confContrasena && <p className="errorP" >Las contraseñas no coinciden</p> }

            </div>

            <br/><input type="submit" value="Crear Cuenta" />

            <p>¿Tienes una cuenta? <Link to="/IniciarSesion">Iniciar sesión</Link> </p>
        </form>

    </div>

}

export default CrearCuenta;