import {Col, Row } from "react-bootstrap";
import './EliminarOllaComun.css'
import { useForm } from "react-hook-form";
import $ from "jquery";

function pruebaDatos(){
    const token = document.cookie.replace('token=','')

    var url="http://localhost:5001";
    $.ajax({
        headers:{
        'authorization': token
        },
        contentType: "application/json",
        type: "POST",
        dataType: "json",
        url: url+"/esAdmin",
    })
    .done(function( data, textStatus, jqXHR ) {
        /* console.log("data del done: ",data) */
        if(data.error){
            $(".formulario-eliminarOC").hide();
            $(".titulo").text("Debe iniciar sesión para poder eliminar una olla común")
            $(".titulo").addClass("alert alert-danger");
        }else{
        if(data.admin==0){
            $(".formulario-eliminarOC").hide();
            $(".titulo").text("Su cuenta no es de administrador, no puede acceder")
            $(".titulo").addClass("alert alert-danger");
        }else{
            $(".formulario-eliminarOC").show();
        }
        }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        if ( console && console.log ) {
            console.log( "La solicitud a fallado: " +  textStatus);
        }
    });

}

function NotError() {
    pruebaDatos();

    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (datosForm) =>{
        var dato1=datosForm.id;

        var url="http://localhost:5001";
        $.ajax({
            data: JSON.stringify({"id":dato1}),
            contentType: "application/json",
            type: "DELETE",
            dataType: "json",
            url: url+"/eliminarOllaComun",
        })
        .done(function( data, textStatus, jqXHR ) {
            /* console.log("data del .done: ",data); */
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            if ( console && console.log ) {
                console.log( "La solicitud a fallado: " +  textStatus);
            }
        });

        alert("Se ha eliminado la olla común de la página!")
    }

    return (
        <div>
            <Row>
                <h1 className="titulo">Eliminar Olla Comun</h1>
            </Row>
            <form className="formulario-eliminarOC" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col>
                        Ingrese el id de la olla comun
                    </Col>
                    <Col>
                        <input type="text" name="mensaje-error" id="mensaje-error" {...register('id', {
                            required: true
                        })}/>
                        {errors.id?.type === 'required' && <p className="errorP"> Es necesario indicar el id de la olla común.</p>}
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col style={{textAlign: "right"}}>
                        <button type="submit">Eliminar</button>
                    </Col>
                </Row>
            </form>
        </div>
    );
    
  }
  
  export default NotError;
  