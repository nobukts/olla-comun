import {Col, Row } from "react-bootstrap";
import $ from "jquery";

import './AñadirOllaComun.css'
import { useForm } from "react-hook-form";

function AñadirOllaComun() {

    const {register, formState: {errors}, handleSubmit} = useForm();
    
    const onSubmit = (datosForm) => {
        var dato1=datosForm.titulo;
        var dato2=datosForm.region;
        var dato3=datosForm.direccion;
        var dato4=datosForm.fecha;
        var dato5=datosForm.descr;
        var dato6=datosForm.link;
        var dato7=datosForm.cordX;
        var dato8=datosForm.cordY;

    
        var url="http://localhost:5001";
        $.ajax({
            data: JSON.stringify({"imagen":dato6,"titulo":dato1,"fecha":dato4,"descripcion":dato5,"direccion":dato3,"region":dato2,"telefono":"test1","correo":"test2","cordX":dato7,"cordY":dato8}),
            contentType: "application/json",
            type: "POST",
            dataType: "json",
            url: url+"/crearollacomun",
        })
        .done(function( data, textStatus, jqXHR ) {
            console.log("data del .done: ",data);
        })
        .fail(function( jqXHR, textStatus, errorThrown ) {
            if ( console && console.log ) {
                console.log( "La solicitud a fallado: " +  textStatus);
            }
        });

        alert("Se ha añadido la olla común a la página!")
        
    }

    return (
    <div className="cont-olla">
        <Row>
            <h1>Añadir olla común</h1>
        </Row>
        <form className="formulario-olla" onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col>
                    <p>Ingrese el nombre del evento</p>
                </Col>
                <Col>
                    <input type="text" name="titulo" id="titulo" {...register('titulo', {
                        required: true
                    })}/>

                    {errors.titulo?.type === 'required' && <p className="errorP">El nombre del evento es requerido</p>}

                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Elegir región</p>
                </Col>
                <Col>
                <select id="region" {...register('region')}>
                    <option value={"region de Arica y Parinacota"}>Arica y Parinacota</option>
                    <option value={"region de Tarapaca "}>Tarapacá</option>
                    <option value={"region de Antofagasta"}>Antofagasta</option>
                    <option value={"region de Atacama"}>Atacama</option>
                    <option value={"region de Coquimbo"}>Coquimbo</option>
                    <option value={"region de valparaiso"}>Valparaíso</option>
                    <option value={"region metropolitana"}>R. Metropolitana</option>
                    <option value={"region de Ohiggins"}>OHiggins</option>
                    <option value={"region del Maule"}>Maule</option>
                    <option value={"region del Ñuble"}>Ñuble</option>
                    <option value={"region del Biobio"}>Biobio</option>
                    <option value={"region de La Araucania"}>La Araucanía</option>
                    <option value={"region de Los Rios"}>Los Ríos</option>
                    <option value={"region de Los Lagos"}>Los Lagos</option>
                    <option value={"region de Aysen"}>Aysén</option>
                    <option value={"region de Magallanes"}>Magallanes</option>
                </select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Ingrese la dirección del evento</p>
                </Col>
                <Col>
                    <input type="text" name="direccion" id="direccion" {...register('direccion', {
                        required: true
                    })}/>
                    {errors.direccion?.type === 'required' && <p className="errorP">La dirección es requerida</p>}
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Ingrese la fecha</p>
                </Col>
                <Col>
                    <input type="date" name="fecha_evento" id="fecha_evento" {...register('fecha', {
                        required: true
                    })}/>
                    {errors.fecha?.type === 'required' && <p className="errorP">Es necesario indicar la fecha del evento</p>}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <p>
                            Ingresar descripción
                        </p>                    
                    </Row>
                </Col>
                <Col>
                    <textarea name="descr" id="descr" cols="30" rows="10" {...register('descr', {
                        required: true
                    })}></textarea>
                    {errors.descr?.type === 'required' && <p className="errorP">La descripción es requerida.</p>}
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Agregar foto (opcional)</p>
                </Col>
                <Col>
                    <input type="text" name="fotoEvento" id="fotoEvento" placeholder="Link: www.imagen.com" {...register('link', {})}/>
                </Col>
            </Row>
            <Row>
                <p>Puede obtener las coordenadas en google maps</p>
                <Col>
                    <p>Ingrese la cordenada del mapa X</p>
                </Col>
                <Col>
                    <input type="text" name="cordX" id="cordX" placeholder="30.000000000000000" {...register('cordX', {
                        required: true
                    })}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Ingrese la cordenada del mapa Y</p>
                </Col>
                <Col>
                    <input type="text" name="cordY" id="cordY" placeholder="-30.000000000000000" {...register('cordY', {
                        required: true
                    })}/>
                </Col>
            </Row>
            
            
            <Row>
                <Col style={{textAlign: "right"}}>
                    <button type="submit"> Registrar olla común </button>
                </Col>
                <Col style={{textAlign:"left"}}>
                    <button type="reset">Limpiar datos</button>
                </Col>
            </Row>
        </form>
    </div>
);
    
  }
  
export default AñadirOllaComun;
  