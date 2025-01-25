import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Servicios = () => {
  const [servicios, setServicios] = useState([])
  const [paquetes, setPaquetes] = useState([])

  useEffect(() => {
    // Aquí irían las llamadas a la API para obtener servicios y paquetes
    // Por ahora, usaremos datos de ejemplo
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Servicios Médicos</h2>
      <table className="min-w-full bg-white border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">Código</th>
            <th className="px-4 py-2 border-b">Nombre</th>
            <th className="px-4 py-2 border-b">Descripción</th>
            <th className="px-4 py-2 border-b">Precio</th>
            <th className="px-4 py-2 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {servicios.map((servicio) => (
            <tr key={servicio.codigo_servicio}>
              <td className="border px-4 py-2">{servicio.codigo_servicio}</td>
              <td className="border px-4 py-2">{servicio.nombre}</td>
              <td className="border px-4 py-2">{servicio.descripcion}</td>
              <td className="border px-4 py-2">${servicio.precio.toFixed(2)}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                  Editar
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Paquetes de Servicios</h2>
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
                  Editar
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Eliminar</button>
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
    }),
  ),
  paquetes: PropTypes.arrayOf(
    PropTypes.shape({
      codigo_paquete: PropTypes.string.isRequired,
      lista_servicios_incluidos: PropTypes.arrayOf(PropTypes.string).isRequired,
      precio_paquete: PropTypes.number.isRequired,
    }),
  ),
}

export default Servicios

