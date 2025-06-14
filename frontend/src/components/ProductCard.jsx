export default function ProductCard({product}){
    const imageUrlBase = 'http://localhost:5000/uploads/';
    return(
        <>
        <div className=" bg-white overflow-hidden flex flex-col h-full">
            <div className="w-full h-48 flex items-center justify-center p-4">
                <img src={`${imageUrlBase}${product.image}`} // Construye la URL completa aquí
                     alt={product.title}
          className="max-h-full max-w-full object-contain" />
                
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-6 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2" title={product.title}>
          {product.title}
        </h3>

        {/* Descripción (opcional, si quieres mostrar un fragmento en la tarjeta) */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Precio */}
        <p className="text-2xl font-bold text-emerald-dark mb-4 mt-auto"> {/* mt-auto empuja el precio y botón al final */}
          ${product.price.toFixed(2)}
        </p>
      </div>

        </div>

        </>
    )
}