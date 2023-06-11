//CSS
import "./CartaOllaComun.css"

import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import Geocode from "react-geocode"

//JSON
import ollasC from '/src/assets/datos/OllasComunes.json'
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

const CartaOllaComun = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
    })

    let params = useParams();

    Geocode.setApiKey(import.meta.env.VITE_GOOGLE_MAPS_API);
    Geocode.setLanguage("es");
    Geocode.setLocationType("es");
    Geocode.setLocationType("ROOFTOP");
    
    const [coordenadas, setCoordenadas] = useState({
        lat: -32.996672,
        lng: -71.501392
    })

    if(!isLoaded) return<div><h1>Cargando...</h1></div>

    ollasC.map(ollasC => {
        if (ollasC.id == params.id){
            Geocode.fromAddress(ollasC.direccion).then(
                (response) => {
                    setCoordenadas((response.results[0].geometry.location))
                },
                (error) => {
                  console.error(error);
                }
              );
        }
    })

      return (
        <>
          {
          ollasC && ollasC.map(ollasC => {
            if(ollasC.id == params.id){
                return(
                    <div className="contenedorEsp" key={ollasC.id}>
                      <div className="fila">
                          <Col className="columna izq">
                              <img src={ollasC.imagen} alt="as" />
                          </Col>
                          <Col className="columna">
                              <h1>{ollasC.titulo}</h1>
                              <h3>{ollasC.region}</h3>
                              <span>Dirección: {ollasC.direccion}</span><br/>
                              <span>Descripción: {ollasC.descripcion}</span>
                          </Col>
                      </div>
                      <div className="fila">
                          <Col className="columna izq">

                                <GoogleMap zoom={15} center={coordenadas} mapContainerClassName="map-container mapa-olla">
                                <MarkerF position={{lat: coordenadas.lat, lng: coordenadas.lng}}/>
                                </GoogleMap>
                                
                          </Col>
                          <Col className="columna">
                            <h1>Zona de contacto</h1>
                              <span>Numero de contacto: {ollasC.numero}</span><br/>
                              <span>Email de contacto: {ollasC.email}</span>
                          </Col>
                      </div>
                    </div>
                  )
            }
            return(
                <div className="contenedor" key={ollasC.id}/>                  
              )
            
          })
        }
        </>
    );
};

export default CartaOllaComun;
