//CSS
import "./BarraLateral.css";

//React
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function BarraLateral() {
  return (
    <div className="lateral">
      <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
        
        <div className="texto">
          <h2>Filtro de busqueda</h2>
          <Nav.Link as={Link} to="/BuscarLugares/Filtro-region-metropolitana">Region metropolitana</Nav.Link>
          <Nav.Link as={Link} to="/BuscarLugares/Filtro-region-de-valparaiso">Region de valparaiso</Nav.Link>
          <Nav.Link as={Link} to="/BuscarLugares">Borrar filtros</Nav.Link>
        </div>
        
      </Nav>
    </div>
  );
}

export default BarraLateral;
