import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Facturacion = () => {
  const [facturas, setFacturas] = useState([])
  const [ingresosDiarios, setIngresosDiarios] = useState(0)
  const [ingresosMensuales, setIngresosMensuales] = useState(0)

  useEffect(() => {
    // Aquí irían las llamadas a la API para obtener facturas e ingresos
    // Por ahora, usaremos datos de ejemplo
    setFacturas([
      { id: 1, fecha: "2023-05-20", paciente: "Juan Pérez", monto_total: 2000, estado: "Pagada" },
      { id: 2, fecha: "2023-05-21", paciente: "María González", monto_total: 2500, estado: "Pendiente" },
    ])

    setIngresosDiarios(4500)
    setIngresosMensuales(135000)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Facturación</h2>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Ingresos Diarios</h3>
          <p className="text-2xl font-bold text-green-600">${ingresosDiarios.toFixed(2)}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Ingresos Mensuales</h3>
          <p className="text-2xl font-bold text-green-600">${ingresosMensuales.toFixed(2)}</p>
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Fecha</th>
            <th className="px-4 py-2 border-b">Paciente</th>
            <th className="px-4 py-2 border-b">Monto Total</th>
            <th className="px-4 py-2 border-b">Estado</th>
            <th className="px-4 py-2 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {facturas.map((factura) => (
            <tr key={factura.id}>
              <td className="border px-4 py-2">{factura.id}</td>
              <td className="border px-4 py-2">{factura.fecha}</td>
              <td className="border px-4 py-2">{factura.paciente}</td>
              <td className="border px-4 py-2">${factura.monto_total.toFixed(2)}</td>
              <td className="border px-4 py-2">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    factura.estado === "Pagada" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {factura.estado}
                </span>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                  Ver Detalles
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                  Generar PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Facturacion.propTypes = {
  facturas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      fecha: PropTypes.string.isRequired,
      paciente: PropTypes.string.isRequired,
      monto_total: PropTypes.number.isRequired,
      estado: PropTypes.oneOf(["Pagada", "Pendiente"]).isRequired,
    }),
  ),
  ingresosDiarios: PropTypes.number,
  ingresosMensuales: PropTypes.number,
}

export default Facturacion

