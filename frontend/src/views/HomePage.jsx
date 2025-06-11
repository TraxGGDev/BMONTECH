import FeaturedProducts from "../components/FeaturedProducts"
import HeroSection from "../components/HeroSection"


export default function HomePage(){
    return(
        <>
         

            {/* Si necesitas un fondo general para estas secciones, puedes ponerlo en HomePage como un div normal
                o aplicar los estilos de fondo a las secciones directamente si tienen sentido. */}
            {/* Por ejemplo, podrías hacer esto si quieres un fondo general para las dos secciones: */}
            <div className="bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <FeaturedProducts/>
            </div> 
        </>
    )
}