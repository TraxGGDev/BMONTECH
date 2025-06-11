import {FaShoppingBag ,FaShoppingCart, FaUser, FaSearch} from "react-icons/fa";


export default function Header(){
  return(
    <>
    <header className="w-full flex items-center justify-between bg-gray-100  h-20 px-10 shadow-lg">
     <h1 className=" flex items-center w-1/3 cursor-pointer text-4xl font-bebas gap-2 text-black-400">
     <FaShoppingBag className="cursor-pointer" />
  BMONTECH
     </h1>

     {/*Navegacion */}
     <nav className="w-1/3 flex justify-center">
      <ul className="flex gap-8 text-lg">
  <li>
    <a
      href="/"
      className="relative group"
    >
      <span>Inicio</span>
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-400 group-hover:w-full"></span>
    </a>
  </li>
  <li>
    <a
      href="/productos"
      className="relative group"
    >
      <span>Productos</span>
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-400 group-hover:w-full"></span>
    </a>
  </li>
  <li>
    <a
      href="/ofertas"
      className="relative group"
    >
      <span>Ofertas</span>
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-400 group-hover:w-full"></span>
    </a>
  </li>
  <li>
    <a
      href="/contacto"
      className="relative group"
    >
      <span>Contacto</span>
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all duration-400 group-hover:w-full"></span>
    </a>
  </li>
</ul>
     </nav>

     {/* Iconos */}
  <div className="w-1/3 flex justify-end gap-6 text-2xl">
    <FaSearch className="cursor-pointer" />
    <FaUser className="cursor-pointer" />
    <FaShoppingCart className="cursor-pointer" />
  </div>
  </header>
    </>
  )
}