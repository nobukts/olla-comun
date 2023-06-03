import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import "./Mapa.css"
import { Col, Row } from "react-bootstrap";

export default function Mapa() {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyB00PBkxvd20TcPcypy7-b9VVqmHYW-Im0" })
    
    var latitud = -32.927252
    var longitud = -71.520808
    var z = 15

    function obtenerDireccion(){
        latitud = -35
        longitud = -72
        z = 10
    }

    if (!isLoaded) return <div>Loading...</div>

    return <div className="mapa"> 
        <Row>
            <h1 className="ti-mapa">Mapa</h1>
        </Row>
        <Row>
            <Col>
                <h2>Listado de ollas comunes</h2>
                <button onClick={obtenerDireccion}>
                    Seleccionar casa del bryan    
                </button>            
            </Col>
            <Col>
                <GoogleMap zoom={z} center={{ lat: latitud, lng: longitud }} mapContainerClassName="map-container">
                </GoogleMap>
            </Col>
        </Row>
    </div>
}
