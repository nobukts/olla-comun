//CSS
import "./CartaOllaComun.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Comentarios from "../components/comentarios/comentarios"
import $ from "jquery";
import React, { useState, useEffect } from 'react';

//JSON
//import ollasC from "/src/assets/datos/OllasComunes.json";

function conectarApi(){
  return new Promise((resolve,reject) => {
    //var dato1;
    var retornoDatos

    var url="http://localhost:5001";
    $.ajax({
        
        contentType: "application/json",
        type: "GET",
        dataType: "json",
        url: url+"/obtenerollascomunes/",
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

function crearComentario(comentario, nombre){
  var nuevoComentario = document.createElement("p")
  var etiquetaPadre = document.querySelector(".mostrar-comentarios")
  const usuario = document.createElement("h4")

  usuario.appendChild(document.createTextNode("("+nombre+"):"));
  nuevoComentario.append(comentario);
  etiquetaPadre.append(usuario,nuevoComentario);
}

const CartaOllaComun = () => {
  let params = useParams();

  const {
    register,
    formState: { errors },
    handleSubmit,
  }  = useForm();

  const onSubmit = (data) => {
    crearComentario(data.comentario, data.nombre);
  };

  if(screen.width <= 460){
    var displayValue = "block";
  }else{
    var displayValue = 'flex'
  }

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

  return (
    <>
      {ollasC &&
        ollasC.map((ollasC) => {
          if (ollasC.id == params.id) {
            var x = ollasC.cordX;
            var y = ollasC.cordY;
            var link = `//maps.google.com/maps?q=${x},${y}&z=15&output=embed`;
            return (
              <div className="contenedorEsp" key={ollasC.id}>
                <div style={{display: displayValue}}>
                  <Col className="columna izq">
                    <img src={ollasC.imagen} alt="as" />
                  </Col>
                  <Col className="columna">
                    <h1>{ollasC.titulo}</h1>
                    <h3>{ollasC.region}</h3>
                    <span>Dirección: {ollasC.direccion}</span>
                    <br />
                    <span>Fecha: {ollasC.fecha.slice(0,10)}</span>
                    <br />
                    <br />
                    <span>Descripción: {ollasC.descripcion}</span>
                    
                  </Col>
                </div>
                <div style={{display: displayValue}}>
                  <Col className="columna izq">
                    <iframe className="mapa-Olla" src={link} />
                  </Col>
                  <Col className="columna">
                    <h1>Zona de contacto</h1>
                    <span>Numero de contacto: {ollasC.telefono}</span>
                    <br />
                    <span>Email de contacto: {ollasC.correo}</span>
                  </Col>
                </div>
                <div style={{display: displayValue}}>
                  <Col className="columna">
                    <Comentarios></Comentarios>
                  </Col>
                  
                  
                </div>
                
              </div>
            );
          }
          return <div className="contenedor" key={ollasC.id} />;
        })}
    </>
  );
};



export default CartaOllaComun;
