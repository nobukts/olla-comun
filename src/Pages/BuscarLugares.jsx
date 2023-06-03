//CSS
import "./BuscarLugares-Style.css";
import "../components/BarraLateral/BarraLateral.css";

//REACT
import CartaInformacion from "../components/CartaInformacion/CartaInformacion";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import BarraLateral from "../components/BarraLateral/BarraLateral";

function BuscarLugares() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <BarraLateral />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <div className="Barra-de-busqueda">
              <Col>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Ordenar por
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
                <h3>Busqueda de ollas comunes</h3>
              </Col>
              <Col>
                <Link to="/Mapa">Mapa de busqueda</Link>
              </Col>
            </div>
            <Row className="Zona-cartas">
              <CartaInformacion className="carta" />
              <CartaInformacion className="carta" />
              <CartaInformacion className="carta" />
              <CartaInformacion className="carta" />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BuscarLugares;
