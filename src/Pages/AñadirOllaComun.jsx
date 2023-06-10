import {Col, Row } from "react-bootstrap";

import './AñadirOllaComun.css'
import { useForm } from "react-hook-form";

function AñadirOllaComun() {

    const {register, formState: {errors}, handleSubmit} = useForm();
    
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
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
                <select id="region">
                    <option>Arica y Parinacota</option>
                    <option>Tarapacá</option>
                    <option>Antofagasta</option>
                    <option>Atacama</option>
                    <option>Coquimbo</option>
                    <option>Valparaíso</option>
                    <option>R. Metropolitana</option>
                    <option>OHiggins</option>
                    <option>Maule</option>
                    <option>Ñuble</option>
                    <option>Los Ríos</option>
                    <option>Los Lagos</option>
                    <option>Aysén</option>
                    <option>Magallanes</option>
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
                    <input type="file" name="fotoEvento" id="fotoEvento"/>
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
  