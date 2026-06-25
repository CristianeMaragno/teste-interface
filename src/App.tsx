import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home";
import PaginaNaoPrototipada from "@/pages/PaginaNaoPrototipada";
import PortinariProfile from "@/pages/PortinariProfile";
import Visite from "@/pages/Visite";
import BoasVindas from "@/pages/visita-virtual/BoasVindas";
import Carregando from "@/pages/visita-virtual/Carregando";
import SelecaoIdioma from "@/pages/visita-virtual/SelecaoIdioma";
import Tour from "@/pages/visita-virtual/Tour";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portinari" element={<PortinariProfile />} />
      <Route path="/visite" element={<Visite />} />
      <Route path="/visita-virtual/carregando" element={<Carregando />} />
      <Route path="/visita-virtual/idioma" element={<SelecaoIdioma />} />
      <Route path="/visita-virtual/boas-vindas" element={<BoasVindas />} />
      <Route path="/visita-virtual/tour" element={<Tour />} />
      <Route path="*" element={<PaginaNaoPrototipada />} />
    </Routes>
  );
}

export default App;
