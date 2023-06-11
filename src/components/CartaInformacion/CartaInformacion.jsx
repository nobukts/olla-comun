import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

//JSON
import ollasC from '/src/assets/datos/OllasComunes.json'

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

const CartaInformacion = () => {
  let params = useParams();
  console.log(params);
  var auxRegion;
  var seImprime;

  if(params.filtro == "Filtro-region-de-Arica-y-Parinacota"){
    auxRegion = "region de Arica y Parinacota"
  }
  if(params.filtro == "Filtro-region-de-Tarapaca"){
    auxRegion = "region de Tarapaca"
  }
  if(params.filtro == "Filtro-region-de-Antofagasta"){
    auxRegion = "region de Antofagasta"
  }
  if(params.filtro == "Filtro-region-de-Atacama"){
    auxRegion = "region de Atacama"
  }
  if(params.filtro == "Filtro-region-de-Coquimbo"){
    auxRegion = "region de Coquimbo"
  }
  if(params.filtro == "Filtro-region-de-valparaiso"){
    auxRegion = "region de valparaiso"
  }
  if(params.filtro == "Filtro-region-metropolitana"){
    auxRegion = "region metropolitana"
  }
  if(params.filtro == "Filtro-region-de-Ohiggins"){
    auxRegion = "region de Ohiggins"
  }
  if(params.filtro == "Filtro-region-del-Maule"){
    auxRegion = "region del Maule"
  }
  if(params.filtro == "Filtro-region-del-Ñuble"){
    auxRegion = "region del Ñuble"
  }
  if(params.filtro == "Filtro-region-del-Biobio"){
    auxRegion = "region del Biobio"
  }
  if(params.filtro == "Filtro-region-de-La-Araucania"){
    auxRegion = "region de La Araucania"
  }
  if(params.filtro == "Filtro-region-de-Los-Rios"){
    auxRegion = "region de Los Rios"
  }
  if(params.filtro == "Filtro-region-de-Los-Lagos"){
    auxRegion = "region de Los Lagos"
  }
  if(params.filtro == "Filtro-region-de-Aysen"){
    auxRegion = "region de Aysen"
  }
  if(params.filtro == "Filtro-region-de-Magallanes"){
    auxRegion = "region de Magallanes"
  }
  
  
  

  return (
    <>
      {
      ollasC && ollasC.map(ollasC => {
        if(auxRegion == ollasC.region || params.filtro == undefined){
          seImprime = true;
        }else{
          seImprime = false;
        }

        if(seImprime){
          return(
            <Card style={{ width: "18rem" }} key={ollasC.id}>
            <Card.Img variant="top" src={ollasC.imagen} style={{ height: "225px" }}/>
            <Card.Body>
              <Card.Title>{ollasC.titulo}</Card.Title>
              <Card.Text>
                {ollasC.direccion}
              </Card.Text>
              <Button as={Link} to={`/BuscarLugares/CartaOllaComun/${ollasC.id}`} state={ollasC.id} variant="primary">Ver más detalles</Button>
            </Card.Body>
          </Card>
          )
        }else{
          return(<></>);
        }
        
      })
    }
    </>
  );
}

/* funcion de mostrar las cartas antes de realizar los filtros
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
            <Button as={Link} to={`CartaOllaComun/${ollasC.id}`} state={ollasC.id} variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        )
      })
    }
    </>
  );
}*/

export default CartaInformacion;
