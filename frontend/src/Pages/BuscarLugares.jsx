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
    </div>
  );
}

export default BuscarLugares;
