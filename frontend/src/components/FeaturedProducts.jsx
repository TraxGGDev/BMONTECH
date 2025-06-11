import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"


export default function FeaturedProducts(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Asegúrate de que esta sea la URL correcta de tu backend para obtener productos
        const response = await fetch('http://localhost:5000/api/products/'); 
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // ¡Esta es la línea clave que se modifica!
        // Accedemos al array de productos a través de la propiedad 'products' del objeto 'data'
        if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          // Si la respuesta no tiene la estructura esperada
          console.error("La respuesta del backend no contiene un array válido en 'products':", data);
          setError("Formato de datos de productos inesperado del servidor.");
        }
        
      } catch (err) {
        console.error("Error al cargar los productos destacados:", err);
        setError("No se pudieron cargar los productos destacados. Por favor, inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false); // Siempre termina el estado de carga
      }
    };

    fetchProducts(); // Llama a la función al montar el componente
  }, []); // El array vacío asegura que se ejecute una sola vez al montar

  if (loading) {
    return (
      <section className="py-16 bg-gray-100 text-center">
        <p className="text-xl text-gray-700">Cargando productos...</p>
        {/* Podrías añadir un spinner de carga aquí */}
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-100 text-center">
        <p className="text-xl text-red-600">{error}</p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="py-16 bg-gray-100 text-center">
        <p className="text-xl text-gray-700">No hay productos destacados disponibles en este momento.</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            // Usa _id para la key, ya que es único
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}