import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Mapa.css"
//import data2 from '../assets/datos/OllasComunes.json'
import $ from "jquery";
import React, { useState, useEffect } from 'react';

function conectarApi(){
    return new Promise((resolve,reject) => {
      var retornoDatos
  
      var url="http://localhost:5001";
      $.ajax({
          contentType: "application/json",
          type: "GET",
          dataType: "json",
          url: url+"/obtenerollascomunes",
      })
      .done(function( data, textStatus, jqXHR ) {
          /* console.log("data del .done: ",data); */
          retornoDatos = JSON.parse(JSON.stringify(data));
          resolve(retornoDatos);
      })
      .fail(function( jqXHR, textStatus, errorThrown ) {
          if ( console && console.log ) {
              console.log( "La solicitud a fallado: " +  textStatus);
          }
      });
    })
    
  }

export default function Mapa() {
    const [coord, setCoord] = useState({
        x: -32,
        y: -71
    })
    var link = `//maps.google.com/maps?q=${coord.x},${coord.y}&z=15&output=embed`

    const [ollasC, setOllasC] = useState(null);

    useEffect(() => {
        conectarApi()
        .then(function(retornoDatos){
        /* console.log("retornodatos: ",retornoDatos); */
        setOllasC(retornoDatos);
        })
        .catch(function(error){
        console.error(error);
        });
    }, []);

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
                       {(ollasC && ollasC.map( record =>{                       
                            return(
                            <div className="boton" key={record.id}>
                                <Button onClick={() => setCoord({x: record.cordX, y:record.cordY})}>{record.titulo}</Button>
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
