import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Medicos = () => {
  const [medicos, setMedicos] = useState([])

  useEffect(() => {
    // Aquí iría la llamada a la API para obtener los médicos
    // Por ahora, usaremos datos de ejemplo
    setMedicos([
      {
        id_medico: 1,
        nombre: "Carlos",
        apellido: "Rodríguez",
        dni: "23456789",
        fecha_nac: "1980-05-15",
        email: "carlos@example.com",
        telefono: "1234567890",
        direccion: "Av. Principal 123",
        especialidad: "Cardiología",
        turnos_disponibles: ["Lunes 9-13", "Miércoles 14-18"],
        sueldo: 5000,
      },
      {
        id_medico: 2,
        nombre: "Ana",
        apellido: "Gómez",
        dni: "34567890",
        fecha_nac: "1985-08-20",
        email: "ana@example.com",
        telefono: "0987654321",
        direccion: "Calle Secundaria 456",
        especialidad: "Pediatría",
        turnos_disponibles: ["Martes 9-13", "Jueves 14-18"],
        sueldo: 4500,
      },
    ])
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Gestión de Médicos</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Nombre</th>
            <th className="px-4 py-2 border-b">Apellido</th>
            <th className="px-4 py-2 border-b">Especialidad</th>
            <th className="px-4 py-2 border-b">Turnos Disponibles</th>
            <th className="px-4 py-2 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((medico) => (
            <tr key={medico.id_medico}>
              <td className="border px-4 py-2">{medico.id_medico}</td>
              <td className="border px-4 py-2">{medico.nombre}</td>
              <td className="border px-4 py-2">{medico.apellido}</td>
              <td className="border px-4 py-2">{medico.especialidad}</td>
              <td className="border px-4 py-2">{medico.turnos_disponibles.join(", ")}</td>
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

Medicos.propTypes = {
  medicos: PropTypes.arrayOf(
    PropTypes.shape({
      id_medico: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      apellido: PropTypes.string.isRequired,
      dni: PropTypes.string.isRequired,
      fecha_nac: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      telefono: PropTypes.string.isRequired,
      direccion: PropTypes.string.isRequired,
      especialidad: PropTypes.string.isRequired,
      turnos_disponibles: PropTypes.arrayOf(PropTypes.string).isRequired,
      sueldo: PropTypes.number.isRequired,
    }),
  ),
}

export default Medicos

