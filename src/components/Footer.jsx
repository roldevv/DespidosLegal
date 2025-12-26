import { Link } from 'react-router-dom'
  function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center gap-4">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} <Link className="hover:text-white" to="/">DespidosLegal</Link>. Todos los derechos reservados.
          </p>
        </div>
        <div className="text-center space-x-4">
          <Link to="/aviso-legal" className="text-gray-400 hover:text-white">Aviso legal</Link>
          <Link to="/politica-de-privacidad" className="text-gray-400 hover:text-white">Política de privacidad</Link>
          <Link to="/politica-de-cookies" className="text-gray-400 hover:text-white">Política de cookies</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

