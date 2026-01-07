import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              DespidosLegal
            </Link>
          </div>
          <div className="flex space-x-4">
            {/* <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Inicio
            </Link> */}
            <span className="text-gray-700 pl-3 text-end text-sm font-sm hidden md:block">¿Te han despedido? Revisa tu caso gratis</span>
            <span className="text-gray-700 pl-3 text-end text-sm font-sm hidden">¿Te han despedido? Revisa tu caso gratis</span>
           
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

