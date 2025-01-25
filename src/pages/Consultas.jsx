import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Consultas = () => {
  const [consultas, setConsultas] = useState([])

  useEffect(() => {
    // Aquí iría la llamada a la API para obtener las consultas
    // Por ahora, usaremos datos de ejemplo
    setConsultas([
      {
        id: 1,
        fecha_consulta: "2023-05-20",
        hora_consulta: "10:00",
        paciente: "Juan Pérez",
        medico: "Dr. Carlos Rodríguez",
        servicio: "Consulta General",
        monto_total: 2000,
        pagado: true,
      },
      {
        id: 2,
        fecha_consulta: "2023-05-21",
        hora_consulta: "11:30",
        paciente: "María González",
        medico: "Dra. Ana Gómez",
        servicio: "Consulta Pediátrica",
        monto_total: 2500,
        pagado: false,
      },
    ])
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Gestión de Consultas</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Fecha</th>
            <th className="px-4 py-2 border-b">Hora</th>
            <th className="px-4 py-2 border-b">Paciente</th>
            <th className="px-4 py-2 border-b">Médico</th>
            <th className="px-4 py-2 border-b">Servicio</th>
            <th className="px-4 py-2 border-b">Monto</th>
            <th className="px-4 py-2 border-b">Estado</th>
            <th className="px-4 py-2 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((consulta) => (
            <tr key={consulta.id}>
              <td className="border px-4 py-2">{consulta.id}</td>
              <td className="border px-4 py-2">{consulta.fecha_consulta}</td>
              <td className="border px-4 py-2">{consulta.hora_consulta}</td>
              <td className="border px-4 py-2">{consulta.paciente}</td>
              <td className="border px-4 py-2">{consulta.medico}</td>
              <td className="border px-4 py-2">{consulta.servicio}</td>
              <td className="border px-4 py-2">${consulta.monto_total.toFixed(2)}</td>
              <td className="border px-4 py-2">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    consulta.pagado ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {consulta.pagado ? "Pagado" : "Pendiente"}
                </span>
              </td>
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

Consultas.propTypes = {
  consultas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      fecha_consulta: PropTypes.string.isRequired,
      hora_consulta: PropTypes.string.isRequired,
      paciente: PropTypes.string.isRequired,
      medico: PropTypes.string.isRequired,
      servicio: PropTypes.string.isRequired,
      monto_total: PropTypes.number.isRequired,
      pagado: PropTypes.bool.isRequired,
    }),
  ),
}

export default Consultas

