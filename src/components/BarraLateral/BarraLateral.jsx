//CSS
import "./BarraLateral.css";

//React
import { Nav } from "react-bootstrap";

function BarraLateral() {
  return (
    <div className="lateral">
      <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
        
        <div className="texto">
          <h2>Filtro de busqueda</h2>
          <Nav.Link className="texto">Filtro N°1</Nav.Link>
          <Nav.Link className="texto">Filtro N°2</Nav.Link>
        </div>
        
      </Nav>
    </div>
  );
}

export default BarraLateral;
