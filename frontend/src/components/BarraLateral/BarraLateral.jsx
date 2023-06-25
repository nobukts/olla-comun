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
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Arica-y-Parinacota">Región de Arica y Parinacota</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Tarapaca">Región de Tarapaca</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Antofagasta">Región de Antofagasta</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Atacama">Región de Atacama</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Coquimbo">Región de Coquimbo</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-valparaiso">Región de Valparaiso</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-metropolitana">Región Metropolitana</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Ohiggins">Región de O'higgins</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-del-Maule">Región del Maule</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-del-Ñuble">Región del Ñuble</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-del-Biobio">Región del Biobío</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-La-Araucania">Región de La Araucanía</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Los-Rios">Región de Los Ríos</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Los-Lagos">Región de Los Lagos</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Aysen">Región de Aysén</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares/Filtro-region-de-Magallanes">Región de Magallanes</Nav.Link>
          <Nav.Link style={{color: 'white',fontSize: '12px'}} as={Link} to="/BuscarLugares">Borrar filtros</Nav.Link>
        </div>
        
      </Nav>
    </div>
  );
}

export default BarraLateral;
