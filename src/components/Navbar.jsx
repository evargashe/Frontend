import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-6 shadow-lg h-full rounded-xl max-w-sm mx-auto">
      <div className="flex flex-col items-center space-y-6">
        {/* Header */}
        <Link to="/" className="text-3xl font-bold text-white hover:text-blue-300 transition-all">
          Clínica Médica
        </Link>
        {/* Main Menu */}
        <ul className="flex flex-col items-start space-y-6 w-full">
          {/* Principal Section */}
          <li className="w-full border border-blue-500 rounded-lg p-4">
            <p className="text-lg font-semibold mb-2 w-full truncate group relative">
              Principal
              <span className="absolute hidden group-hover:flex bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg -top-8 left-0 w-max z-10">
                Principal
              </span>
            </p>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/pacientes"
                  className="text-base hover:bg-blue-600 p-2 rounded-md transition-all hover:text-white block w-full text-center truncate group relative"
                >
                  Pacientes
                  <span className="absolute hidden group-hover:flex bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg -top-8 left-0 w-max z-10">
                    Pacientes
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/medicos"
                  className="text-base hover:bg-blue-600 p-2 rounded-md transition-all hover:text-white block w-full text-center truncate group relative"
                >
                  Médicos
                  <span className="absolute hidden group-hover:flex bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg -top-8 left-0 w-max z-10">
                    Médicos
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/realizar-servicios"
                  className="text-base hover:bg-blue-600 p-2 rounded-md transition-all hover:text-white block w-full text-center truncate group relative"
                >
                  Realizar Servicios
                  <span className="absolute hidden group-hover:flex bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg -top-8 left-0 w-max z-10">
                    Realizar Servicios
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/resultados-servicios"
                  className="text-base hover:bg-blue-600 p-2 rounded-md transition-all hover:text-white block w-full text-center truncate group relative"
                >
                  Resultados Servicios
                  <span className="absolute hidden group-hover:flex bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg -top-8 left-0 w-max z-10">
                    Resultados Servicios
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/proforma"
                  className="text-base hover:bg-blue-600 p-2 rounded-md transition-all hover:text-white block w-full text-center truncate group relative"
                >
                  Proforma
                  <span className="absolute hidden group-hover:flex bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg -top-8 left-0 w-max z-10">
                    Proforma
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          {/* Configuración Section */}
          <li className="w-full border border-green-500 rounded-lg p-4">
            <p className="text-lg font-semibold mb-2 w-full truncate group relative">
              Configuración
              <span className="absolute hidden group-hover:flex bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg -top-8 left-0 w-max z-10">
                Configuración
              </span>
            </p>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/usuario"
                  className="text-base hover:bg-blue-600 p-2 rounded-md transition-all hover:text-white block w-full text-center truncate group relative"
                >
                  Usuario
                  <span className="absolute hidden group-hover:flex bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg -top-8 left-0 w-max z-10">
                    Usuario
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/roles"
                  className="text-base hover:bg-blue-600 p-2 rounded-md transition-all hover:text-white block w-full text-center truncate group relative"
                >
                  Roles
                  <span className="absolute hidden group-hover:flex bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg -top-8 left-0 w-max z-10">
                    Roles
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-base hover:bg-blue-600 p-2 rounded-md transition-all hover:text-white block w-full text-center truncate group relative"
                >
                  Servicios
                  <span className="absolute hidden group-hover:flex bg-gray-800 text-white text-sm px-2 py-1 rounded-lg shadow-lg -top-8 left-0 w-max z-10">
                    Servicios
                  </span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
