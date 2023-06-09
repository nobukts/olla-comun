import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api"

import "./Mapa.css"
import { useState } from "react";
import data from '../assets/datos/lugaresOllas.json'

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
                    <div className="listado">
                        {(data.map( record =>{                        
                            return(
                            <div className="boton" key={record.id}>
                                    <button onClick={() => setCoordinates({lat: record.x, long: record.y})}> Olla Común #{record.id}</button>
                            </div>)
                        } )
                        )
                        }
                    </div>
                </Col>
                <Col xs="9" className="col-map">
                    <GoogleMap zoom={15} center={{lat:coordenadas.lat,lng:coordenadas.long}} mapContainerClassName="map-container">
                        <MarkerF position={{lat: coordenadas.lat, lng: coordenadas.long}}/>
                        {(data.map( record =>{                        
                            return(
                                <MarkerF key={record.id} position={{lat: record.x, lng: record.y}}/>
                            )
                            } )
                        )}
                    </GoogleMap>
                </Col>
            </Row>
        </Container>
    )
}
