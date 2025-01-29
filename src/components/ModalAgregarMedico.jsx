import React from "react";
import PropTypes from "prop-types";

const ModalAgregarMedico = ({ showModal, handleCloseModal, formData, handleInputChange }) => {
    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
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
                <h2 className="text-xl font-bold mb-4 text-center">Nuevo Médico</h2>
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.keys(formData).map((key) => {
                            const inputType = key === "fecha_nac"
                                ? "date"
                                : key === "email"
                                    ? "email"
                                    : key === "dni" || key === "telefono"
                                        ? "number"
                                        : "text";

                            return (
                                <div key={key} className="mb-2">
                                    <label className="block text-sm font-medium capitalize">
                                        {key.replace("_", " ")}
                                    </label>
                                    <input
                                        type={inputType}
                                        name={key}
                                        value={formData[key]}
                                        onChange={handleInputChange}
                                        className="border rounded-md w-full p-2 mt-1"
                                    />
                                </div>
                            );
                        })}
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

ModalAgregarMedico.propTypes = {
    showModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
};

export default ModalAgregarMedico;
