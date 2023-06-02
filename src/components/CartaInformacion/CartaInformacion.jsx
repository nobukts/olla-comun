import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CartaInformacion() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="./src/assets/Foto-ejemplo.jpg" />
      <Card.Body>
        <Card.Title>Carta Olla común #numero</Card.Title>
        <Card.Text>
          Descripcion acerca de la olla comun numero # la cual queda en # datos
          ingresado por el usuario.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CartaInformacion;
