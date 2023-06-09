import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//JSON
import ollasC from './OllasComunes.json'

/* GUIA DE COMO SE USA EL JSON
  *
  {
          ollasC && ollasC.map(ollasC => {
            return(
              <div className="cosasdeollas" key={ollasC.id}>
                {ollasC.titulo}
              </div>
            )
          })
        }
*/

/** Como estaban las cartas antes de aplicar el JSON
 * 
 * <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="./src/assets/Foto-ejemplo.jpg" />
      <Card.Body>
        <Card.Title>Ola</Card.Title>
        <Card.Text>
          Descripcion acerca de la olla comun numero # la cual queda en # datos
          ingresado por el usuario.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
*/

function CartaInformacion() {
  return (
    <>
      {
      ollasC && ollasC.map(ollasC => {
        return(
          <Card style={{ width: "18rem" }} key={ollasC.id}>
          <Card.Img variant="top" src={ollasC.imagen} style={{ height: "225px" }}/>
          <Card.Body>
            <Card.Title>{ollasC.titulo}</Card.Title>
            <Card.Text>
              {ollasC.descripcion}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        )
      })
    }
    </>
  );
}

export default CartaInformacion;
