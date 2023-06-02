//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./BarraNavegacion.css";

//REACT
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";

//LOGO
import logo_pag from "../../assets/logo-pag.png";
import logo_usuario from "../../assets/logo-usuario.png";

function BarraNavegacion() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav.Link as={Link} to="/">
              <img className="logo" src={logo_pag} />
            </Nav.Link>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/BuscarLugares">Buscar Lugares</Nav.Link>
              <Nav.Link as={Link} to="/AñadirOllaComun">Añadir Olla Común</Nav.Link>
            </Nav>
            <Nav className="cuenta-usuario">
              <img className="usuario" src={logo_usuario} />
              <NavDropdown
                className="opc-cuenta"
                title="Cuenta"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/CrearCuenta">
                  Crear Cuenta
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/IniciarSesion">
                  Iniciar Sesión
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#cuenta/olvido-contraseña">
                  ¿Olvido la contraseña?
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default BarraNavegacion;
