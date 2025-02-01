import React, { useState } from "react";
import { CgMathPlus } from "react-icons/cg";

const MantenimientoResultados = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [resultados, setResultados] = useState([
        { id: 1, usuario: "Admin", dni: "12345678", paciente: "Jhoel V.", fecha: "2024-01-29", status: "ENTREGADO" },
        { id: 2, usuario: "User1", dni: "87654321", paciente: "Andre V.", fecha: "2024-01-28", status: "FINALIZADO" },
    ]);
    const [showForm, setShowForm] = useState(false);

    const filteredResultados = resultados.filter((resultado) =>
        `${resultado.dni} ${resultado.paciente} ${resultado.fecha} ${resultado.status}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">

            {!showForm ? (
                <div>
                    <div className="flex flex-col items-start mb-4 border border-gray-300 rounded p-4">
                        <h2 className="text-2xl font-bold">Mantenimiento de Resultados</h2>
                    </div>
                    <div className="flex justify-between items-center mb-4 border border-gray-300 rounded p-4">
                        <h1 className="font-bold">Listado de resultados de exmanes</h1>
                        <button
                            className="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setShowForm(true)}
                        >
                            <CgMathPlus className="mr-2" />
                            Nuevo Registro
                        </button>
                    </div>
                    <div className="border border-gray-300 rounded p-4">

                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Buscar resultado..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border px-4 py-2 rounded w-1/3"
                            />
                        </div>
                        <table className="w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b">#</th>
                                    <th className="px-4 py-2 border-b">Usuario</th>
                                    <th className="px-4 py-2 border-b">DNI</th>
                                    <th className="px-4 py-2 border-b">Paciente</th>
                                    <th className="px-4 py-2 border-b">Fecha</th>
                                    <th className="px-4 py-2 border-b">Estado</th>
                                    <th className="px-4 py-2 border-b">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredResultados.map((resultado) => (
                                    <tr key={resultado.id} className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">{resultado.id}</td>
                                        <td className="border px-4 py-2">{resultado.usuario}</td>
                                        <td className="border px-4 py-2">{resultado.dni}</td>
                                        <td className="border px-4 py-2">{resultado.paciente}</td>
                                        <td className="border px-4 py-2">{resultado.fecha}</td>
                                        <td className="border px-4 py-2">
                                            <span className={`px-2 py-1 text-white rounded ${resultado.status === "ENTREGADO" ? "bg-blue-600" : "bg-red-600"}`}>
                                                {resultado.status}
                                            </span>
                                        </td>
                                        <td className="border px-4 py-2">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
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
                </div>
            ) : (
                <div>
                    <div className="mb-4 border p-4">
                        <h1 className="text-2xl font-bold">Registrar Resultado</h1>
                    </div>

                    <div className="border border-gray-300 rounded p-4">

                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <input type="number" placeholder="DNI Paciente" className="border px-4 py-2 rounded w-2/3 mr-2" />
                                <input type="text" placeholder="Nombre Paciente" className="border px-4 py-2 rounded w-2/3 mr-2" />
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Buscar</button>
                            </div>
                            <div className="flex items-center mb-2">
                                <input type="number" placeholder="Médico" className="border px-4 py-2 rounded w-2/3 mr-2" />
                                <input type="text" className="border px-4 py-2 rounded w-full mr-2" />
                            </div>

                        </div>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                            Registrar Resultado
                        </button>
                        <div className="border border-gray-300 rounded p-4 mt-4">
                            <h2 className="text-xl font-bold mb-2">Detalles de Resultados</h2>
                            <table className="w-full bg-white border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border-b">ID</th>
                                        <th className="px-4 py-2 border-b">Análisis</th>
                                        <th className="px-4 py-2 border-b">Examen</th>
                                        <th className="px-4 py-2 border-b">Archivo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">1</td>
                                        <td className="border px-4 py-2">Hematología</td>
                                        <td className="border px-4 py-2">Hemograma Completo</td>
                                        <td className="border px-4 py-2">archivo.pdf</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MantenimientoResultados;
