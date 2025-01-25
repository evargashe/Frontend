import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([])

  useEffect(() => {
    // Aquí iría la llamada a la API para obtener los pacientes
    // Por ahora, usaremos datos de ejemplo
    setPacientes([
      {
        id_paciente: 1,
        nombre: "Juan",
        apellido: "Pérez",
        dni: "12345678",
        fecha_nac: "1990-01-01",
        email: "juan@example.com",
        telefono: "1234567890",
        direccion: "Calle 123",
      },
      {
        id_paciente: 2,
        nombre: "María",
        apellido: "González",
        dni: "87654321",
        fecha_nac: "1985-05-15",
        email: "maria@example.com",
        telefono: "0987654321",
        direccion: "Avenida 456",
      },
    ])
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gestión de Pacientes</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Apellido</th>
            <th className="px-4 py-2">DNI</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id_paciente}>
              <td className="border px-4 py-2">{paciente.id_paciente}</td>
              <td className="border px-4 py-2">{paciente.nombre}</td>
              <td className="border px-4 py-2">{paciente.apellido}</td>
              <td className="border px-4 py-2">{paciente.dni}</td>
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

Pacientes.propTypes = {
  pacientes: PropTypes.arrayOf(
    PropTypes.shape({
      id_paciente: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      apellido: PropTypes.string.isRequired,
      dni: PropTypes.string.isRequired,
      fecha_nac: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      telefono: PropTypes.string.isRequired,
      direccion: PropTypes.string.isRequired,
    }),
  ),
}

export default Pacientes

