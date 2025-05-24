import Product from "../models/Product.js";

//Crear un producto nuevo
export const createProduct = async (req, res) => {
    try{
    // 1. Obtener los datos del cuerpo de la petición
    const {title, description, price, image, stock, category} = req.body;

    // 2. Validar que los campos obligatorios estén presentes
    if(!title || !description || !price || !stock){
        res.status(400).json({message:'Todos los campos obligatorios deben ser completados.'});
        return;
    }

    // 3. Crear el producto en la base de datos

        const newProduct = await Product.create({
            title,
            description,
            price,
            image,
            stock,
            category
        });

    // 4. Enviar respuesta de éxito
         res.status(201).json(newProduct);

    }
    catch(error){
          res.status(500).json({message:'Error al crear producto', error:error.message});
    }
};


//Obtener todos los productos de la base de datos
export const getAllProducts = async (req, res) => {
    try{
      // 1. Obtener todos los productos desde la base de datos
        const allProducts = await Product.find();
        if(!allProducts.length){
            return res.status(404).json({success: false, message: "No products found"})
        }
        // 2. Enviar los productos como respuesta
        res.status(200).json({
            success: true,
            count: allProducts.length,
            products: allProducts
        })

    }
    catch(error){
      // 3. Manejo de errores
      res.status(500).json({success: false, message: "Server Error"})
    }
};

//Obtener producto por ID
export const getProductById = async (req, res) => {
    try{
    // 1. Obtener el ID desde los parámetros de la URL
    const productId = req.params.id;
        
    // 2. Buscar el producto en la base de datos por su ID
    const product = await Product.findById(productId);

    // 3. Si no se encuentra, responder con error 404
    if(!product){
        return res.status(404).json({success: false, message: "No se encontró el producto con el ID proporcionado"})
    }

    // 4. Si se encuentra, devolver el producto en la respuesta
     res.status(200).json({
        success:true,
        product:product
     });
    }
    catch (error){
      // 5. Manejo de errores del servidor
      res.status(500).json({success: false, message: "Server Error"});
    }
};