import { Link } from 'react-router-dom';
import './PiePagina.css'


export default function PiePagina() {
  return (
      <footer>
          <a>&copy; {new Date().getFullYear()} Copyright:{' José Osega - Jefté Ponce - Bryan López '} </a>
          <br/>
          <Link to="/NotError" className='error-page'>Notificar error</Link>
      </footer>
  );
}
