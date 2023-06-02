import { Col, Row, Accordion } from "react-bootstrap";
import ContenedorImagen from "../components/ContenedorImagen/ContenedorImagen";

import './Inicio.css'

function Inicio() {
  return (
    <div >
      <Row style={{display: "flex", alignItems: "center",justifyContent: "center", height: "100%"}}>
        <Col > <ContenedorImagen/> </Col>
        <Col>
          <h1>Información general</h1>
          <Accordion defaultActiveKey="0" className="bloq-info">
          <Accordion.Item eventKey="0">
            <Accordion.Header>1. ¿Qué es una olla común?</Accordion.Header>
            <Accordion.Body>
              Una olla común es una actividad solidaria que ha sido utilizada desde hace varias decadás para batir uno de los problemas más comunes en las sociedades actuales, el hambre. <br/> A través de donaciones solidarias entre vecinos o el apoyo de alguna ONG, se realiza una organización para realizar platos de comida y tratar de ayudar a la gente sin casa o con problemas financieros.<br/> En el caso de nuestro país, Chile, se han realizado desde el año 1929 ollas comunes segun informa la fundación Gente de la calle, y durante la pandemia se realizaron diversas instancias debido a que realzó la desigualdad existente en el país.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>2. ¿Quiénes somos?</Accordion.Header>
            <Accordion.Body>
              Somos un grupo de estudiantes, cuyo objetivo es apoyar a las ONG y personas comúnes para darle mayor visibilidad a las ollas comunes, debido a que hemos podido observar la necesidad de estas actividades en nuestra sociedad post-pandemia.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>3. Información de contacto</Accordion.Header>
            <Accordion.Body>
              Bryan López: bryan.lopez.a@mail.pucv.cl
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
      </Row>
    </div>
  );
}

export default Inicio;
