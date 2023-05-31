import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BarraNavegacion() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Olla Comun</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#buscar-lugares">Buscar Lugares</Nav.Link>
            <Nav.Link href="#añadir-olla">Añadir Olla Común</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Cuenta" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#cuenta/crear-cuenta">Crear Cuenta</NavDropdown.Item>
              <NavDropdown.Item href="#cuenta/iniciar-sesion">Iniciar Sesión</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#cuenta/olvido-contraseña">¿Olvido la contraseña?</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;