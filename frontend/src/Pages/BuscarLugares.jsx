//CSS
import "./BuscarLugares-Style.css";
//import "../components/BarraLateral/BarraLateral.css";

//REACT
import CartaInformacion from "../components/CartaInformacion/CartaInformacion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import BarraLateral from "../components/BarraLateral/BarraLateral";
import $ from "jquery";

function pruebaDatos(){
  const token = document.cookie.replace('token=','')

  var url="http://localhost:5001";
  $.ajax({
      headers:{
      'authorization': token
      },
      contentType: "application/json",
      type: "POST",
      dataType: "json",
      url: url+"/esAdmin",
  })
  .done(function( data, textStatus, jqXHR ) {
      /* console.log("data del done: ",data) */
      if(data.error){
        $(".AdminBoton").hide();
      }else{
        if(data.admin==0){
          $(".AdminBoton").hide();
        }else{
          $(".AdminBoton").show();
        }
        
      }
  })
  .fail(function( jqXHR, textStatus, errorThrown ) {
      if ( console && console.log ) {
          console.log( "La solicitud a fallado: " +  textStatus);
      }
  });

}

function BuscarLugares() {
  pruebaDatos();
  return (
    
        <Row>
          <Col xs="12" sm="12" lg="4" xl="3" xxl="3" style={{maxWidth:"292px", padding:0}}>
            <BarraLateral />
          </Col>
          <Col xs="12" sm="12" lg="8" xl="9" xxl="9" className="contenedor">
            <div className="pagina">
            <div className="Barra-de-busqueda">
              <Col>
                <h3>Búsqueda de ollas comunes</h3>
              </Col>
              <Col>
              <button><Link style={{color: 'black', textDecoration: 'none'}} to="/Mapa"> Mapa de búsqueda</Link></button>
              <button className="AdminBoton" style={{marginLeft:"15px"}}><Link to="/EliminarOllaComun" style={{color: 'black', textDecoration: 'none'}} >Eliminar Olla Común</Link></button>
              </Col>
            </div>
            <Row className="Zona-cartas">
              <CartaInformacion className="cartaOlla" />
            </Row>
            </div>
          </Col>
        
        </Row>
  );
}

export default BuscarLugares;
