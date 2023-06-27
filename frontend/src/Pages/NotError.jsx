import {Col, Row } from "react-bootstrap";
import './NotError.css'
import { useForm } from "react-hook-form";
import $ from "jquery";

function NotError() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (datosForm) =>{
        var dato1=datosForm.nombre;
        var dato2=datosForm.descr_error;
    
        var url="http://localhost:5001";
        $.ajax({
            data: JSON.stringify({"nombre":dato1,"descripcion":dato2}),
            contentType: "application/json",
            type: "POST",
            dataType: "json",
            url: url+"/notError",
        })
        .done(function( data, textStatus, jqXHR ) {
            alert(data.mensaje);
            /* console.log("data del .done: ",data); */
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            if ( console && console.log ) {
                console.log( "La solicitud a fallado: " +  textStatus);
            }
        });
    }
    return (
        <div>
            <Row>
                <h1 className="titulo">Notificar error de la página a los desarrolladores</h1>
            </Row>
            <form className="formulario-error" onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col>
                        Ingrese un nombre al error
                    </Col>
                    <Col>
                        <input type="text" name="mensaje-error" id="mensaje-error" {...register('nombre', {
                            required: true
                        })}/>
                        {errors.nombre?.type === 'required' && <p className="errorP"> Es necesario indicar el nombre del error.</p>}
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        Ingrese la descripción del error
                    </Col>
                    <Col>
                        <textarea name="descr-error" id="descr-error" cols="30" rows="10" {...register('descr_error', {
                            required: true
                        })}/>
                        {errors.descr_error?.type === 'required' && <p className="errorP"> Es necesario indicar una descripción del error.</p>}
                    </Col>
                </Row>
                <br/>
                <Row>
                <Col style={{textAlign: "right"}}>
                    <button type="submit"> Enviar error </button>
                </Col>
                <Col style={{textAlign:"left"}}>
                    <button type="reset">Limpiar datos</button>
                </Col>
                </Row>
            </form>
        </div>
    );
    
  }
  
  export default NotError;
  