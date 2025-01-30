import React from "react";

const ModalAgregarServicio = ({ showModal, handleCloseModal, formData, handleInputChange }) => {
    if (!showModal) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para guardar los datos del nuevo servicio
        console.log("Nuevo servicio agregado:", formData);
        handleCloseModal();
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-3xl h-auto max-h-[90vh] overflow-y-auto relative">

                <button
                    onClick={handleCloseModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                    aria-label="Cerrar"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
                <h2 className="text-xl font-bold mb-4 text-center">Nuevo Servicio</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-gray-700" htmlFor="codigo_servicio">
                            Código del Servicio
                        </label>
                        <input
                            type="text"
                            id="codigo_servicio"
                            name="codigo_servicio"
                            value={formData.codigo_servicio}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold text-gray-700" htmlFor="nombre">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold text-gray-700" htmlFor="descripcion">
                            Descripción
                        </label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-bold text-gray-700" htmlFor="precio">
                            Precio
                        </label>
                        <input
                            type="number"
                            id="precio"
                            name="precio"
                            value={formData.precio}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg py-2 px-4 mt-2"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-center gap-10">
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Modificar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalAgregarServicio;
