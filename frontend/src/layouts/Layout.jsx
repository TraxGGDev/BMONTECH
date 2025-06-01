import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = ()=>{
    return(
<div className="min-h-screen flex flex-col">
      <Header /> 
      
      <main className="flex-grow">
        {/* Este div contendrá tu contenido principal y le dará el ancho limitado/centrado si lo deseas */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* Tailwind para max-width, centrado y padding */}
          <Outlet /> 
        </div>
      </main>

      <Footer />
    </div>
    )
}

export default Layout;