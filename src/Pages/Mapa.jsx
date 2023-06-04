import { Link } from "react-router-dom";
import "./Mapa.css"
import { Col, Container, Row } from "react-bootstrap";

export default function Mapa() {
    return(
        <Container fluid>
            <div className="barra">
                <Row className="barra-titular">
                    <Col xs={11}>
                        <h1>Listado de direcciones en formato mapa</h1> 
                    </Col>
                    <Col>
                        <Link to="/BuscarLugares"> Volver atrás</Link>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col className="col-lateral">
                    <h2 className="mini-titu">Listado de ollas comunes</h2>
                    <ul className="direcciones">
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                        <li><button>Hola</button></li>
                    </ul>
                </Col>
                <Col xs="9">
                    <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215143.74574820994!2d-71.65068324753919!3d-32.589629527251816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689b0516498c055%3A0x32e0680d98a733d9!2sZapallar%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1685842087714!5m2!1ses-419!2scl"></iframe>
                </Col>
            </Row>
        </Container>
    )
}
