//CSS
import './BuscarLugares-Style.css';

//REACT
import CartaInformacion from "../components/CartaInformacion/CartaInformacion"
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function BuscarLugares() {
  return (
    <div>
        <div className="Barra-de-busqueda">
            <Col>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Ordenar por
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Col>
            <Col><h3>Busqueda de ollas comunes</h3></Col>
            <Col><button>Mapa de busqueda</button></Col>
            
        </div>
        <Row className="Zona-cartas">
            <CartaInformacion className="carta"/>
            <CartaInformacion className="carta"/>
            <CartaInformacion className="carta"/>
            <CartaInformacion className="carta"/>
            <CartaInformacion className="carta"/>
        </Row>
        
    </div>
    
  );
}

export default BuscarLugares;