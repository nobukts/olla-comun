import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api"

import "./Mapa.css"
import { useState } from "react";

export default function Mapa() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
    })

    const [coordenadas, setCoordinates] = useState({
        lat: -32.996672,
        long: -71.501392
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
                        <button><Link to="/BuscarLugares"> Volver al otro formato</Link></button>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col className="col-lateral">
                    <h2 className="mini-titu">Listado de ollas comunes</h2>
                    <ul className="direcciones">
                        <li><button onClick={() => {setCoordinates({lat: -33.008117, long: -71.546946})}}>Olla común #1</button></li>
                        <li><button onClick={() => {setCoordinates({lat: -33.009835, long: -71.548169})}}>Olla común #2</button></li>
                        <li><button onClick={() => {setCoordinates({lat: -32.931153, long: -71.516647})}}>Olla común #3</button></li>
                        <li><button onClick={() => {setCoordinates({lat: -32.933620, long: -71.516422})}}>Olla común #4</button></li>
                        <li><button onClick={() => {setCoordinates({lat: -32.930928, long: -71.532333})}}>Olla común #5</button></li>
                        <li><button onClick={() => {setCoordinates({lat: -33.270123, long: -71.655881})}}>Olla común #6</button></li>
                    </ul>
                </Col>
                <Col xs="9" className="col-map">
                    <GoogleMap zoom={15} center={{lat:coordenadas.lat,lng:coordenadas.long}} mapContainerClassName="map-container">
                        <MarkerF position={{lat: coordenadas.lat, lng: coordenadas.long}}/>
                    </GoogleMap>
                </Col>
            </Row>
        </Container>
    )
}
