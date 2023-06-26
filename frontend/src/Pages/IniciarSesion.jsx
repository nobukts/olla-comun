import { useForm } from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import $ from "jquery";
import ReCAPTCHA from "react-google-recaptcha";
import {useRef, useState} from "react"

import './formulario_styles.css'

const IniciarSesion = () => {
    const captcha = useRef(null);

    const onChange = () => {
        if(captcha.current.getValue()){
            console.log("El usuario no es un robot");
        }
    }

    const { register, formState: {errors} , handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (datosForm) => {
        if(captcha.current.getValue()){
            $(".error-captcha").hide()
            var dato1=datosForm.correo;
            var dato2=datosForm.contrasena;
            /* console.log(datosForm); */
        
            var url="http://localhost:5001";
            $.ajax({
                data: JSON.stringify({"email":dato1,"password":dato2}),
                contentType: "application/json",
                type: "POST",
                dataType: "json",
                url: url+"/iniciarsesion",
            })
            .done(function( data, textStatus, jqXHR ) {
                console.log("data del .done: ",data);
                /* if(data.mensaje){
                    $("header").text(data.mensaje);
                    if(data.error){
                        $("header").addClass("alert alert-danger");
                    }else{
                        $("header").addClass("alert alert-primary");
                    }
                } */
                if(!data.error){navigate("/");}
                else{
                    $(".error-captcha").show();
                    $(".error-captcha").text(data.mensaje);
                    $(".error-captcha").addClass("alert alert-danger");
                }
                
            })
            .fail(function( jqXHR, textStatus, errorThrown ) {
                if ( console && console.log ) {
                    console.log( "La solicitud a fallado: " +  textStatus);
                }
            });
        }else{
            $(".error-captcha").text("Debe aceptar el captcha")
            $(".error-captcha").addClass("alert alert-danger")
            console.log("acepta el captcha")
        }
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
                <div style={{marginTop:"15px"}}>
                    <ReCAPTCHA
                        ref={captcha}
                        sitekey="6LfvpckmAAAAAI3LLFxGHkRP2BDbFiMH4s_HFWLS"
                        onChange={onChange}
                    />
                    <div className="error-captcha"></div>
                </div>

                <br/><input type="submit" value="Iniciar Sesion" />

                <p>¿No tienes una cuenta? <Link to="/CrearCuenta">Crear ahora</Link> </p>
                <Link to="/RecuperarCuenta1">¿Olvidaste tu contraseña?</Link>

            </form>

        </div>

    </div>

}

export default IniciarSesion;