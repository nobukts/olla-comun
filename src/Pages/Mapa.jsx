import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api"
import Geocode from "react-geocode"
import { useState } from "react";

import "./Mapa.css"
import data2 from '../assets/datos/OllasComunes.json'

export default function Mapa() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
    })

    const [coordenadas, setCoordinates] = useState({
        lat: -32.996672,
        lng: -71.501392
    })

    if(!isLoaded) return<div><h1>Cargando...</h1></div>

    Geocode.setApiKey(import.meta.env.VITE_GOOGLE_MAPS_API);
    Geocode.setLanguage("es");
    Geocode.setLocationType("es");
    Geocode.setLocationType("ROOFTOP");

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
                    <div className="listado">
                       {(data2.map( record =>{                        
                            return(
                            <div className="boton" key={record.id}>                              
                                <button onClick={() => (Geocode.fromAddress(record.direccion).then(
                                        (response) => {
                                            setCoordinates((response.results[0].geometry.location))
                                        },
                                        (error) => {
                                            console.error(error);
                                        }
                                    ))}>{record.titulo}</button>
                            </div>)
                        }))}
                    </div>
                </Col>
                <Col xs="9" className="col-map">
                    <GoogleMap zoom={15} center={{lat:coordenadas.lat,lng:coordenadas.lng}} mapContainerClassName="map-container">
                        <MarkerF position={{lat: coordenadas.lat, lng: coordenadas.lng}}/>
                    </GoogleMap>
                </Col>
            </Row>
        </Container>
    )
}
