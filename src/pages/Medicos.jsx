import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CgMathPlus } from "react-icons/cg";

const Medicos = () => {
  const [medicos, setMedicos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
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
    ]);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMedicos = medicos.filter((medico) =>
    medico.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medico.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
    medico.dni.includes(searchTerm)
  );

  return (
    <div className="p-4">
      <div className="flex flex-col items-start mb-4 border border-gray-300 rounded p-4">
        <h2 className="text-2xl font-bold">Mantenimiento de Médicos</h2>
      </div>
      <div className="flex justify-between items-center mb-4 border border-gray-300 rounded p-4">
        <h1 className="font-bold">Listado de Médicos</h1>
        <button className="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <CgMathPlus className="mr-2" />
          Nuevo Médico
        </button>
      </div>
      <div className="border border-gray-300 rounded p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar médico..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border px-4 py-2 rounded w-1/3"
          />
        </div>
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Nombre</th>
              <th className="px-4 py-2 border-b">Apellido</th>
              <th className="px-4 py-2 border-b">Especialidad</th>
              <th className="px-4 py-2 border-b">DNI</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicos.map((medico) => (
              <tr key={medico.id_medico} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{medico.id_medico}</td>
                <td className="border px-4 py-2">{medico.nombre}</td>
                <td className="border px-4 py-2">{medico.apellido}</td>
                <td className="border px-4 py-2">{medico.especialidad}</td>
                <td className="border px-4 py-2">{medico.dni}</td>
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
    </div>
  );
};

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
    })
  ),
};

export default Medicos;
