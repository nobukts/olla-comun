import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {GoogleMap, useLoadScript} from "@react-google-maps/api"

import "./Mapa.css"

export default function Mapa() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
    })

    if(!isLoaded) return<div><h1>Cargando...</h1></div>

    return(
        <Container fluid>
            <div className="barra">
                <Row className="barra-titular">
                    <Col xs={11}>
                        <h1>Listado de direcciones en formato mapa</h1> 
                    </Col>
                    <Col>
                        <button><Link to="/BuscarLugares"> Volver atrás</Link></button>
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
                    <GoogleMap zoom={10} center={{lat:44,lng:-80}} mapContainerClassName="map-container">

                    </GoogleMap>
                </Col>
            </Row>
        </Container>
    )
}
