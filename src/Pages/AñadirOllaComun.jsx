import {Col, Row } from "react-bootstrap";

function AñadirOllaComun() {
  return (
    <div className="bloq">
        <Row>
            <h1>Añadir olla común</h1>
        </Row>
        <Row>
            <Col>
                Elegir región
            </Col>
            <Col>
              <select id="region">
                  <option> Arica y Parinacota</option>
                  <option> Tarapacá</option>
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
        <br/>
        <Row>
            <Col>
                Ingrese la descripción del error
            </Col>
            <Col>
                <textarea name="descr-error" id="descr-error" cols="30" rows="10"></textarea>
            </Col>
        </Row>
        <button type="submit"> Enviar error </button>
    </div>
);
    
  }
  
export default AñadirOllaComun;
  