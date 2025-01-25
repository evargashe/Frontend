const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-lg">&copy; 2025 Clínica Médica. Todos los derechos reservados.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-300 transition-all">Política de privacidad</a>
          <a href="#" className="hover:text-blue-300 transition-all">Términos y condiciones</a>
          <a href="#" className="hover:text-blue-300 transition-all">Contacto</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
