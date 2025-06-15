import FeaturedProducts from "../components/FeaturedProducts"
import HeroSection from "../components/HeroSection"
import BrandSlider from "../components/BrandSlider"
import EntryLevelPCs from "../components/EntryLevelsPc"
import MidLevelsPCs from "../components/MidLevelsPc"
import HighLevelsPCs from "../components/HighLevelsPc"


export default function HomePage(){
    return(
        <>
           
            <div className="bg-gray-100 min-h-screen">
                 <BrandSlider/>
                 <FeaturedProducts/>
                 <EntryLevelPCs/>
                 <MidLevelsPCs/>
                 <HighLevelsPCs/>

            </div>
        </>
    )
}