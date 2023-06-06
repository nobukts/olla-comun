//CSS
import "./BuscarLugares-Style.css";
//import "../components/BarraLateral/BarraLateral.css";

//REACT
import CartaInformacion from "../components/CartaInformacion/CartaInformacion";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import BarraLateral from "../components/BarraLateral/BarraLateral";

function BuscarLugares() {
  return (
    <div className="contenedor">
        
      <BarraLateral />
        <div className="pagina">
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
          <Col>
            <h3>Búsqueda de ollas comunes</h3>
          </Col>
          <Col>
          <button><Link to="/Mapa"> Mapa de búsqueda</Link></button>
          </Col>
          </div>
        <Row className="Zona-cartas">
          <CartaInformacion className="cartaOlla" />
          
        </Row>
        </div>
    </div>
  );
}

export default BuscarLugares;
