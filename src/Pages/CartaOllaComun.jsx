//CSS
//import "./BuscarLugares-Style.css";

import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import "./CartaOllaComun.css"


//JSON
import ollasC from '../components/CartaInformacion/OllasComunes.json'

const CartaOllaComun = () => {
    let params = useParams();

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
                              <p>mapa</p>
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
                <div className="contenedor">
                  
                </div>
              )
            
          })
        }
        </>
    );
};

export default CartaOllaComun;
