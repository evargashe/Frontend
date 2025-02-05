import React, { useState } from "react";
import { CgMathPlus } from "react-icons/cg";

const RealizacionExamen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [examenes, setExamenes] = useState([
        { id: 1, dni_paciente: "12345678", paciente: 'Jhoel V.', medico: "Dr. López", fecha: "2024-01-29", estado: "PENDIENTE" },
        { id: 2, dni_paciente: "87654321", paciente: 'Andre V.', medico: "Dra. Martínez", fecha: "2024-01-28", estado: "FINALIZADO" },
        { id: 3, dni_paciente: "11223344", paciente: 'Diego V.', medico: "Dr. Fernández", fecha: "2024-01-27", estado: "PENDIENTE" },
    ]);
    const [showForm, setShowForm] = useState(false); // Estado para manejar la visualización del formulario

    const filteredExamenes = examenes.filter((examen) =>
        `${examen.dni_paciente} ${examen.paciente} ${examen.medico} ${examen.fecha} ${examen.estado}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleNuevoRegistro = () => {
        setShowForm(true); // Cambiar a true para mostrar el formulario
    };

    const handleRegistrarExamen = () => {
        // Aquí agregarías la lógica para registrar el examen.
        alert("Examen registrado");
    };

    return (
        <div className="p-4">
            {!showForm ? (
                <>
                    <div className="flex flex-col items-start mb-4 border border-gray-300 rounded p-4">
                        <h2 className="text-2xl font-bold">Mantenimiento de Realizar Examen</h2>
                    </div>
                    <div className="flex justify-between items-center mb-4 border border-gray-300 rounded p-4">
                        <h1 className="font-bold">Listado de Examenes realizados</h1>
                        <button
                            className="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleNuevoRegistro}
                        >
                            <CgMathPlus className="mr-2" />
                            Nuevo Registro
                        </button>
                    </div>

                    <div className="border border-gray-300 rounded p-4">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Buscar examen..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="border px-4 py-2 rounded w-1/3"
                            />
                        </div>
                        <table className="w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b">#</th>
                                    <th className="px-4 py-2 border-b">DNI Paciente</th>
                                    <th className="px-4 py-2 border-b">Paciente</th>
                                    <th className="px-4 py-2 border-b">Médico</th>
                                    <th className="px-4 py-2 border-b">Fecha</th>
                                    <th className="px-4 py-2 border-b">Estado</th>
                                    <th className="px-4 py-2 border-b">Accion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredExamenes.map((examen) => (
                                    <tr key={examen.id} className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">{examen.id}</td>
                                        <td className="border px-4 py-2">{examen.dni_paciente}</td>
                                        <td className="border px-4 py-2">{examen.paciente}</td>
                                        <td className="border px-4 py-2">{examen.medico}</td>
                                        <td className="border px-4 py-2">{examen.fecha}</td>
                                        <td className="border px-4 py-2">
                                            <span className={`px-2 py-1 text-white rounded ${examen.estado === "PENDIENTE" ? "bg-green-600" : "bg-red-600"}`}>
                                                {examen.estado}
                                            </span>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex flex-col items-start mb-4 border border-gray-300 rounded p-4">
                        <h1 className="text-2xl font-bold">Registro Realizar Examen</h1>
                    </div>

                    <div className="border border-gray-300 rounded p-4">
                        <div className="mb-4 border p-4">
                            <h2 className="text-1xl font-bold">Registrar Examenes Paciente</h2>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center mb-4">
                                <input
                                    type="text"
                                    placeholder="DNI Paciente"
                                    className="border px-4 py-2 rounded w-1/3 mr-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Paciente"
                                    className="border px-4 py-2 rounded w-2/3"
                                />
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">Buscar</button>
                            </div>

                            <div className="flex items-center mb-4">
                                <input
                                    type="text"
                                    placeholder="DNI Médico"
                                    className="border px-4 py-2 rounded w-1/3 mr-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Médico"
                                    className="border px-4 py-2 rounded w-2/3"
                                />
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">Buscar</button>
                            </div>

                            <div className="flex items-center mb-4">
                                <input
                                    type="text"
                                    placeholder="Análisis"
                                    className="border px-4 py-2 rounded w-2/3 mr-2"
                                />
                                <input
                                    type="text"
                                    placeholder="Examen"
                                    className="border px-4 py-2 rounded w-2/3"
                                />
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Agregar</button>
                            </div>
                        </div>

                        <button
                            onClick={handleRegistrarExamen}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
                        >
                            Registrar Realización Exámenes
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default RealizacionExamen;
