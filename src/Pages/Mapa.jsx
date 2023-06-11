import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./Mapa.css"
import data2 from '../assets/datos/OllasComunes.json'

export default function Mapa() {

    return(
        <Container fluid>
            <div className="barra">
                <Row className="barra-titular">
                    <Col xs={11}>
                        <h1>Listado de direcciones en formato mapa</h1> 
                    </Col>
                    <Col>
                        <button><Link style={{color: 'black'}} to="/BuscarLugares"> Volver al otro formato</Link></button>
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
                                
                            </div>)
                        }))}
                    </div>
                </Col>
                <Col xs="9" className="col-map">
                    
                </Col>
            </Row>
        </Container>
    )
}
