import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CgMathPlus } from "react-icons/cg";
import ModalAgregarPaciente from "../components/ModalAgregarPaciente"; // Importar el componente Modal

const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id_paciente: "",
    nombre: "",
    apellido: "",
    dni: "",
    fecha_nac: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  useEffect(() => {
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
    ]);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPacientes = pacientes.filter(
    (paciente) =>
      paciente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paciente.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paciente.dni.includes(searchTerm)
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-start mb-4 border border-gray-300 rounded p-4">
        <h2 className="text-2xl font-bold">Mantenimiento de Pacientes</h2>
      </div>
      <div className="flex justify-between items-center mb-4 border border-gray-300 rounded p-4">
        <h1 className="font-bold">Listado de Pacientes</h1>
        <button
          onClick={handleOpenModal}
          className="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          <CgMathPlus className="mr-2" />
          Nuevo Paciente
        </button>
      </div>

      <ModalAgregarPaciente
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        formData={formData}
        handleInputChange={handleInputChange}
      />

      <div className="border border-gray-300 rounded p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar paciente..."
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
              <th className="px-4 py-2 border-b">DNI</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredPacientes.map((paciente) => (
              <tr key={paciente.id_paciente} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{paciente.id_paciente}</td>
                <td className="border px-4 py-2">{paciente.nombre}</td>
                <td className="border px-4 py-2">{paciente.apellido}</td>
                <td className="border px-4 py-2">{paciente.dni}</td>
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
    })
  )
}

export default Pacientes