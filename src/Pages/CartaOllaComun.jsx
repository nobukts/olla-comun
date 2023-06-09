//CSS
//import "./BuscarLugares-Style.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


//JSON
import ollasC from '../components/CartaInformacion/OllasComunes.json'

function CartaOllaComun() {
  return (
    <div className="contenedor">
        <Row>
            <Col>
                <img src={ollasC.imagen} alt="hola" />
            </Col>
            <Col>
                <h1>{ollasC.titulo}</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>mapa</p>
            </Col>
            <Col>
                <p>{ollasC.email}</p>
            </Col>
        </Row>
    </div>
  );
}

export default CartaOllaComun;
