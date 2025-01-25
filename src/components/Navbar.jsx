import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-6 shadow-lg h-full rounded-xl max-w-sm mx-auto">
      <div className="flex flex-col items-center space-y-6">
        <Link to="/" className="text-3xl font-bold text-white hover:text-blue-300 transition-all">
          Clínica Médica
        </Link>
        <ul className="flex flex-col items-center space-y-6 w-full">
          <li>
            <Link 
              to="/pacientes" 
              className="text-lg hover:bg-blue-600 p-3 rounded-md transition-all hover:text-white w-full text-center"
            >
              Pacientes
            </Link>
          </li>
          <li>
            <Link 
              to="/medicos" 
              className="text-lg hover:bg-blue-600 p-3 rounded-md transition-all hover:text-white w-full text-center"
            >
              Médicos
            </Link>
          </li>
          <li>
            <Link 
              to="/servicios" 
              className="text-lg hover:bg-blue-600 p-3 rounded-md transition-all hover:text-white w-full text-center"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link 
              to="/consultas" 
              className="text-lg hover:bg-blue-600 p-3 rounded-md transition-all hover:text-white w-full text-center"
            >
              Consultas
            </Link>
          </li>
          <li>
            <Link 
              to="/facturacion" 
              className="text-lg hover:bg-blue-600 p-3 rounded-md transition-all hover:text-white w-full text-center"
            >
              Facturación
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
