import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Mapa.css"
import data2 from '../assets/datos/OllasComunes.json'
import {useState} from "react";

export default function Mapa() {
    const [coord, setCoord] = useState({
        x: -32,
        y: -71
    })
    var link = `//maps.google.com/maps?q=${coord.x},${coord.y}&z=15&output=embed`

    return(
        <Container fluid>
            <div className="barra">
                <Row className="barra-titular" style={{padding: '5px'}}>
                    <Col xs={10}>
                        <h1>Listado de direcciones en formato mapa</h1> 
                    </Col>
                    <Col>
                        <button><Link style={{color: 'black', textDecoration: 'none'}} to="/BuscarLugares"> Volver al otro formato</Link></button>
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
                                <Button onClick={() => setCoord({x: record.x, y:record.y})}>{record.titulo}</Button>
                            </div>)
                        }))}
                    </div>
                </Col>
                <Col xs="9" className="col-map">
                    <iframe className="mapa" src={link}/>
                    
                </Col>
            </Row>
        </Container>
    )
}
