import {Col, Row } from "react-bootstrap";
import './NotError.css'

function NotError() {
    return (
        <div className="bloq">
            <Row>
                <h1>Notificar error de la página a los desarrolladores</h1>
            </Row>
            <Row>
                <Col>
                    Ingrese un nombre al error
                </Col>
                <Col>
                    <input type="text" name="mensaje-error" id="mensaje-error" />
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
  
  export default NotError;
  