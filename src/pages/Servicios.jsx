import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { CgMathPlus } from "react-icons/cg"
import { FaSearch } from "react-icons/fa"

const Servicios = () => {
  const [servicios, setServicios] = useState([])
  const [paquetes, setPaquetes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setServicios([
      { codigo_servicio: "S001", nombre: "Consulta General", descripcion: "Consulta médica general", precio: 2000 },
      { codigo_servicio: "S002", nombre: "Análisis de Sangre", descripcion: "Examen de sangre completo", precio: 500 },
    ])

    setPaquetes([
      {
        codigo_paquete: "P001",
        lista_servicios_incluidos: ["S001", "S002"],
        precio_paquete: 2125, // (2000 + 500) * 0.85
      },
    ])
  }, [])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredServicios = servicios.filter((servicio) =>
    servicio.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    servicio.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-4">
      <div className="flex flex-col items-start mb-4 border border-gray-300 rounded p-4">
        <h2 className="text-2xl font-bold">Mantenimiento de Servicios</h2>
      </div>
      <div className="flex justify-between items-center mb-4 border border-gray-300 rounded p-4">
        <h1 className="font-bold">Listado de Servicios</h1>
        <button className="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <CgMathPlus className="mr-2" />
          Nuevo Servicio
        </button>
      </div>
      <div className="border border-gray-300 rounded p-4">
        <div className="mb-4 flex items-center">
          <input
            type="text"
            placeholder="Buscar servicio..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border px-4 py-2 rounded w-1/3"
          />
        </div>
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Código</th>
              <th className="px-4 py-2 border-b">Nombre</th>
              <th className="px-4 py-2 border-b">Descripción</th>
              <th className="px-4 py-2 border-b">Precio</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredServicios.map((servicio) => (
              <tr key={servicio.codigo_servicio} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{servicio.codigo_servicio}</td>
                <td className="border px-4 py-2">{servicio.nombre}</td>
                <td className="border px-4 py-2">{servicio.descripcion}</td>
                <td className="border px-4 py-2">${servicio.precio.toFixed(2)}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                      <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 mb-4 border border-gray-300 rounded p-4">
        <h1 className="font-bold">Listado de Servicios</h1>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">Código</th>
            <th className="px-4 py-2 border-b">Servicios Incluidos</th>
            <th className="px-4 py-2 border-b">Precio</th>
            <th className="px-4 py-2 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paquetes.map((paquete) => (
            <tr key={paquete.codigo_paquete}>
              <td className="border px-4 py-2">{paquete.codigo_paquete}</td>
              <td className="border px-4 py-2">{paquete.lista_servicios_incluidos.join(", ")}</td>
              <td className="border px-4 py-2">${paquete.precio_paquete.toFixed(2)}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                  </svg>
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Servicios.propTypes = {
  servicios: PropTypes.arrayOf(
    PropTypes.shape({
      codigo_servicio: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
    })
  ),
  paquetes: PropTypes.arrayOf(
    PropTypes.shape({
      codigo_paquete: PropTypes.string.isRequired,
      lista_servicios_incluidos: PropTypes.arrayOf(PropTypes.string).isRequired,
      precio_paquete: PropTypes.number.isRequired,
    })
  ),
}

export default Servicios
