//CSS
import "./BarraLateral.css";

//React
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function BarraLateral() {
  return (
    <div className="lateral">
      <Nav className="col-md-12 d-md-block bg-light sidebar">
        
        <div className="texto">
          <h2>Filtro de busqueda</h2>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Arica-y-Parinacota">region de Arica y Parinacota</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Tarapaca">Region de Tarapaca</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Antofagasta">Region de Antofagasta</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Atacama">Region de Atacama</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Coquimbo">Region de Coquimbo</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-valparaiso">Region de Valparaiso</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-metropolitana">Region Metropolitana</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Ohiggins">Region de O'higgins</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-del-Maule">Region del Maule</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-del-Ñuble">Region del Ñuble</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-del-Biobio">Region del Biobío</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-La-Araucania">Region de La Araucanía</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Los-Rios">Region de Los Ríos</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Los-Lagos">Region de Los Lagos</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Aysen">Region de Aysén</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Magallanes">Region de Magallanes</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares">Borrar filtros</Nav.Link>
        </div>
        
      </Nav>
    </div>
  );
}

export default BarraLateral;
