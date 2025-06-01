export default function ProductCard({product}){
    const imageUrlBase = 'http://localhost:5000/uploads/';
    return(
        <>
        <div className=" bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
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

        {/* Botón de Ver Detalles */}
        {/* Usar un enlace (<a>) si al hacer clic lleva a la página de detalle del producto */}
        <a
          href={`/product/${product.id}`} // Asume que tienes un 'id' en tus datos del backend
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center transition duration-300"
        >
          Ver Detalles
        </a>

        {/* Opcional: Indicador de Stock (si lo quieres visible aquí) */}
        {product.stock > 0 ? (
          <span className="text-green-600 text-sm mt-2">En Stock ({product.stock})</span>
        ) : (
          <span className="text-red-600 text-sm mt-2">Agotado</span>
        )}
      </div>

        </div>

        </>
    )
}