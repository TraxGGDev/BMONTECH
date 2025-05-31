export default function HeroSection (){
    return(
        <div>
            <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/5230868.png')" }}>
                {/* Fondo oscuro para contraste, puedes usar un overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">La Tecnología que Impulsa tu Mundo</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl">Descubre las mejores computadoras, componentes y accesorios para trabajo, gaming y creación.</p>
                    <button className="bg-emerald-dark hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                        Ver Todos los Productos
                    </button>
                </div>
            </section>
        </div>
    )
}