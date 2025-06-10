import { useState } from 'react';

const Header = () => {

   // Estado para controlar la visibilidad de la barra de búsqueda
  const [showSearchBar, setShowSearchBar] = useState(false);

  // Función para alternar la visibilidad
  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  return (
   <header className="w-full flex items-center justify-between bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] h-20 px-10 shadow-lg">
  <h1 className=" cursor-pointer text-4xl font-bold text-cyan-400 hover:text-white transition-colors duration-300" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
  BMONTECH
</h1>
      {/* Barra de búsqueda */}
       <button
            onClick={toggleSearchBar}
            className="p-2 rounded-full hover:bg-emerald-700 transition duration-200"
            aria-label="Toggle Search Bar"
          >
            {/* Puedes reemplazar esto con un icono SVG de lupa */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {showSearchBar && (
      <form className="w-full max-w-md">
        
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Buscar productos..."
            autoFocus
            required
          />
          <button
            type="submit"
            className="cursor-pointer text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5"
          >
            Buscar
          </button>
          <button
                onClick={toggleSearchBar}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                &times; {/* Una 'x' simple */}
              </button>
          
        </div>
        
      </form>
      
       )}
    </header>
  );
};

export default Header;