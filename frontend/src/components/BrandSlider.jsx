import {Slider} from "react-tech-slider";
import amd from '../assets/brands/amd.svg';
import corsair from '../assets/brands/corsair.svg';
import intel from '../assets/brands/intel.svg';
import msi from '../assets/brands/MSI.svg';
import razer from '../assets/brands/razer.svg';

const brandsList = [
  { id: 1, name: "AMD", img: amd },
  { id: 2, name: "Corsair", img: corsair },
  { id: 3, name: "Intel", img: intel },
  { id: 4, name: "msi", img: msi },
  { id: 5, name: "razer", img: razer },
  

];


export default function BrandSlider(){
    return(
        <>
        <div className="py-4 mb-15">
          {/* Título */}
      <div className="text-center mb-15">
        <h1 className="text-3xl font-sans-serif text-black-400">Nuestras marcas aliadas</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded"></div>
      </div>
      <Slider
        brandsList={brandsList}
        borderWidth={0}
        borderColor="#000000"
        backgroundColor="#ffffff"
        iconWidth={7} // en rem, o usa px si prefieres
        pauseOnHoverActive={false}
        durationMs={30000}
      />
    </div>
        </>
    )
}