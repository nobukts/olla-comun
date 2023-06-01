//CSS
import "bootstrap/dist/css/bootstrap.min.css"
import './ContenedorImagen.css'

//LOGO
import example_photo from '../../assets/olla-comun-example.jpg'

export default function ContenedorImagen(){
    return (

        <div className="ex-photo">
        <figure className="oc-img">
            <img src={example_photo}/>
            <figcaption>Olla comun realizada durante el año 2020</figcaption>
        </figure>

      </div>
    );
}