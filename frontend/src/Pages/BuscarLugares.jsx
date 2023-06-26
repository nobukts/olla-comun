//CSS
import "./BuscarLugares-Style.css";
//import "../components/BarraLateral/BarraLateral.css";

//REACT
import CartaInformacion from "../components/CartaInformacion/CartaInformacion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import BarraLateral from "../components/BarraLateral/BarraLateral";

function BuscarLugares() {
  return (
    
        <Row>
          <Col xs="12" sm="12" lg="4" xl="3" xxl="3" style={{maxWidth:"292px", padding:0}}>
            <BarraLateral />
          </Col>
          <Col xs="12" sm="12" lg="8" xl="9" xxl="9" className="contenedor">
            <div className="pagina">
            <div className="Barra-de-busqueda">
              <Col>
                <h3>Búsqueda de ollas comunes</h3>
              </Col>
              <Col>
              <button><Link style={{color: 'black', textDecoration: 'none'}} to="/Mapa"> Mapa de búsqueda</Link></button>
              </Col>
            </div>
            <Row className="Zona-cartas">
              <CartaInformacion className="cartaOlla" />
            </Row>
            </div>
          </Col>
        
        </Row>
  );
}

export default BuscarLugares;
