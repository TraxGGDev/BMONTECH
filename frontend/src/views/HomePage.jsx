import FeaturedProducts from "../components/FeaturedProducts"
import HeroSection from "../components/HeroSection"
import BrandSlider from "../components/BrandSlider"


export default function HomePage(){
    return(
        <>
         

            <BrandSlider/>
            <div className="bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <FeaturedProducts/>
            </div> 
        </>
    )
}