import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Pacientes from "./pages/Pacientes"
import Medicos from "./pages/Medicos"
import Servicios from "./pages/Servicios"
import Consultas from "./pages/Consultas"
import Facturacion from "./pages/Facturacion"

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Navbar a la izquierda */}
        <div className="w-1/4 bg-blue-600 text-white p-6">
          <Navbar />
        </div>

        {/* Contenido principal centrado a la derecha */}
        <main className="w-3/4 container mx-auto px-8 py-8 flex-grow flex justify-center">
          <div className="w-full max-w-4xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pacientes" element={<Pacientes />} />
              <Route path="/medicos" element={<Medicos />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/consultas" element={<Consultas />} />
              <Route path="/facturacion" element={<Facturacion />} />
            </Routes>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
