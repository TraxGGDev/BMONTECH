import FeaturedProducts from "../components/FeaturedProducts"
import HeroSection from "../components/HeroSection"
import BrandSlider from "../components/BrandSlider"


export default function HomePage(){
    return(
        <>
           
            <div className="bg-gray-100 min-h-screen">
                 <BrandSlider/>
                 <FeaturedProducts/>

            </div>
        </>
    )
}