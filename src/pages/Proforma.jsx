import React, { useState } from "react";
import { CgMathPlus } from "react-icons/cg";

const Proforma = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [proformas, setProformas] = useState([
        { id: 1, examen: "Hemograma", cantidad: 1, precio: 50.00, monto: 50.00 },
        { id: 2, examen: "Glucosa", cantidad: 2, precio: 30.00, monto: 60.00 },
    ]);
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="p-4">
            {!showForm ? (
                <div>
                    <div className="flex flex-col items-start mb-4 border border-gray-300 rounded p-4">
                        <h2 className="text-2xl font-bold">Mantenimiento de Proformas</h2>
                    </div>
                    <div className="flex justify-between items-center mb-4 border border-gray-300 rounded p-4">
                        <h1 className="font-bold">Listado de Proformas</h1>
                        <button
                            className="inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setShowForm(true)}
                        >
                            <CgMathPlus className="mr-2" />
                            Nueva Proforma
                        </button>
                    </div>
                    <div className="border border-gray-300 rounded p-4">
                        <table className="w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b">ID</th>
                                    <th className="px-4 py-2 border-b">Examen</th>
                                    <th className="px-4 py-2 border-b">Cantidad</th>
                                    <th className="px-4 py-2 border-b">Precio</th>
                                    <th className="px-4 py-2 border-b">Monto</th>
                                    <th className="px-4 py-2 border-b">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {proformas.map((proforma) => (
                                    <tr key={proforma.id} className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">{proforma.id}</td>
                                        <td className="border px-4 py-2">{proforma.examen}</td>
                                        <td className="border px-4 py-2">{proforma.cantidad}</td>
                                        <td className="border px-4 py-2">${proforma.precio}</td>
                                        <td className="border px-4 py-2">${proforma.monto}</td>
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
                        <div className="mt-4">
                            <label className="font-bold">Total: </label>
                            <input type="text" className="border px-4 py-2 rounded w-1/4" disabled value={proformas.reduce((acc, p) => acc + p.monto, 0).toFixed(2)} />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="mb-4 border p-4">
                        <h1 className="text-2xl font-bold">Registro de Proforma</h1>
                    </div>
                    <div className="border border-gray-300 rounded p-4">
                        <div className="mb-4 border p-4">
                            <h2 className="text-1xl font-bold">Registrar Proforma Paciente</h2>
                        </div>
                        <div>
                            <div className="mb-4 flex items-center gap-4">
                                <input type="number" placeholder="DNI Paciente" className="border px-4 py-2 rounded w-1/3" />
                                <input type="text" placeholder="Nombre Paciente" className="border px-4 py-2 rounded w-2/3" />
                                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Buscar</button>
                            </div>
                            <div className="mb-4 flex items-center gap-4">
                                <select className="border px-4 py-2 rounded w-1/4">
                                    <option>Seleccionar Análisis</option>
                                </select>
                                <select className="border px-4 py-2 rounded w-1/4">
                                    <option>Seleccionar Examen</option>
                                </select>
                                <input type="number" placeholder="Precio" className="border px-4 py-2 rounded w-1/6" />
                                <input type="number" placeholder="Cantidad" className="border px-4 py-2 rounded w-1/6" />
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Agregar</button>
                            </div>
                        </div>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                            Registrar Proforma
                        </button>
                        <div className="border border-gray-300 rounded p-4 mt-4">
                            <h2 className="text-xl font-bold mb-2">Detalles de Proforma</h2>
                            <table className="w-full bg-white border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 border-b">ID</th>
                                        <th className="px-4 py-2 border-b">Examen</th>
                                        <th className="px-4 py-2 border-b">Cantidad</th>
                                        <th className="px-4 py-2 border-b">Precio</th>
                                        <th className="px-4 py-2 border-b">Monto</th>
                                        <th className="px-4 py-2 border-b">Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">1</td>
                                        <td className="border px-4 py-2">Examen A</td>
                                        <td className="border px-4 py-2">2</td>
                                        <td className="border px-4 py-2">$50</td>
                                        <td className="border px-4 py-2">$100</td>
                                        <td className="border px-4 py-2">
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                            </svg></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-end items-center mt-4">
                            <label className="font-bold mr-2">Total:</label>
                            <input type="text" readOnly className="border px-4 py-2 rounded w-1/4" value="$100" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Proforma;
