//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./BarraNavegacion.css";

//REACT
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";
import $ from "jquery";

//LOGO
import logo_pag from "../../assets/logo-pag.png";
import logo_usuario from "../../assets/logo-usuario.png";

/* function pruebaDatos(){
  const token = document.cookie.replace('token=','')

  var url="http://localhost:5001";
  $.ajax({
      headers:{
      'authorization': token
      },
      contentType: "application/json",
      type: "POST",
      dataType: "json",
      url: url+"/pruebaDatos",
  })
  .done(function( data, textStatus, jqXHR ) {
      console.log("data del done: ",data)
      if(!data.error){
        $(".botonCrearCuenta").hide();
        $(".botonIniciarSesion").hide();
        $(".botonManejoCuenta").text("Cerrar cuenta");
      }
  })
  .fail(function( jqXHR, textStatus, errorThrown ) {
      if ( console && console.log ) {
          console.log( "La solicitud a fallado: " +  textStatus);
      }
  });

} */

function BarraNavegacion() {
  /* pruebaDatos(); */
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
                <NavDropdown.Item as={Link} to="/CrearCuenta" className="botonCrearCuenta">
                  Crear Cuenta
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/IniciarSesion" className="botonIniciarSesion">
                  Iniciar Sesión
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/RecuperarCuenta1" className="botonManejoCuenta">
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
