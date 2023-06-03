import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarraNavegacion from "./components/BarraNavegacion/BarraNavegacion";

import Inicio from "./Pages/Inicio";
import BuscarLugares from "./Pages/BuscarLugares";
import AñadirOllaComun from "./Pages/AñadirOllaComun";
import IniciarSesion from "./Pages/IniciarSesion";
import CrearCuenta from "./Pages/CrearCuenta";
import PiePagina from "./components/PiePagina/PiePagina";
import Mapa from "./Pages/Mapa"
import RecuperarCuenta1 from "./Pages/RecuperarCuenta1"
import RecuperarCuenta2 from "./Pages/RecuperarCuenta2"
import RecuperarCuenta3 from "./Pages/RecuperarCuenta3"

import "./Apps.css"

function Apps() {
  return (
    <div className="Apps">
      <div className="content-wrap">
        <Router>
              <BarraNavegacion/>
              <Routes>
                  <Route path="/" element={<Inicio/>} />
                  <Route path="BuscarLugares" element={<BuscarLugares/>} />
                  <Route path="AñadirOllaComun" element={<AñadirOllaComun/>} />
                  <Route path="IniciarSesion" element={<IniciarSesion/>} />
                  <Route path="CrearCuenta" element={<CrearCuenta/>} />
                  <Route path="Mapa" element={<Mapa/>} />
                  <Route path="RecuperarCuenta1" element={<RecuperarCuenta1/>}/>
                  <Route path="RecuperarCuenta2" element={<RecuperarCuenta2/>}/>
                  <Route path="RecuperarCuenta3" element={<RecuperarCuenta3/>}/>
              </Routes>
          </Router>
      </div>
      <PiePagina/>
    </div>
  );
}

export default Apps;
