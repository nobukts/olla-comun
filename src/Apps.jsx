import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BarraNavegacion from "./components/BarraNavegacion/BarraNavegacion";
import Home from "./components/Pages/Home";
import BuscarLugares from "./components/Pages/BuscarLugares";
import AñadirOllaComun from "./components/Pages/AñadirOllaComun";
import IniciarSesion from "./components/Pages/IniciarSesion";
import CrearCuenta from "./components/Pages/CrearCuenta";

function Apps() {
  return (
    <div className="Apps">
        <Router>
            <BarraNavegacion/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="BuscarLugares" element={<BuscarLugares/>} />
                <Route path="AñadirOllaComun" element={<AñadirOllaComun/>} />
                <Route path="IniciarSesion" element={<IniciarSesion/>} />
                <Route path="CrearCuenta" element={<CrearCuenta/>} />
            </Routes>
        </Router>
      
    </div>
  );
}

export default Apps;
