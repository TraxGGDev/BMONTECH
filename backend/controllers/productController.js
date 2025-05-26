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

//Actualizar producto
export const updateProduct = async (req, res) => {
    try{
    // 1. Obtener el ID del producto desde los parámetros de la URL
    const productId = req.params.id;

    // 2. Obtener los datos actualizados desde el cuerpo de la petición
    const productUpdated = req.body;

    // 3. Buscar y actualizar el producto en la base de datos
    const product = await Product.findByIdAndUpdate(productId, productUpdated, {new:true});

    // 4. Si no se encuentra el producto, devolver un error 404
    if(!product){
        return res.status(404).json({
            success: false, 
            message: "No se encontró el producto con el ID proporcionado"
        })
    }

    // 5. Devolver el producto actualizado como respuesta
    res.status(200).json({
        success:true,
        product:product
    })
    }
    catch(error){
    // 6. Manejo de errores del servidor
      res.status(500).json({success: false, message: "Server Error"});
    }
};

//Eliminar producto
export const deleteProduct = async (req, res) => {
    try{
    // 1. Obtener el ID del producto desde los parámetros de la URL
    const productId = req.params.id;
    // 2. Buscar el producto en la base de datos por ID
    const product = await Product.findByIdAndDelete(productId);
    // 3. Si no se encuentra, responder con error 404
    if(!product){
        return res.status(404).json({
            success: false, 
            message: "No se encontró el producto con el ID proporcionado"
        });
    }
    // 5. Responder con mensaje de éxito
    res.status(200).json({
        success: true, 
        message: "Producto eliminado"
    })

    }
    catch(error){
     // 6. Manejo de errores del servidor
     res.status(500).json({success: false, message: "Server Error"});
    }
};

//Buscar productos
export const searchProduct = async (req, res) => {
    try{
    // 1. Obtener el término de búsqueda desde req.query.query
     const searchTerm = req.query.query;

    // 3. Buscar en la base de datos usando expresiones regulares para hacer la búsqueda flexible (por ejemplo: por título o descripción)
    const products = await Product.find({
        $or:[
            {title:{$regex:searchTerm, $options: 'i'}},
            {description:{$regex:searchTerm, $options: 'i'}}
        ]
    });

    // 4. Si no hay coincidencias, devolver un array vacío o mensaje informativo
    if(products.length == 0){
        return res.status(404).json({
            success: false, 
            message: "No se encontró ninguna coincidencia"
        })
    }

    // 5. Enviar los resultados encontrados como respuesta
    res.status(200).json({
        success:true,
        results:products
    });

    }
    catch(error){
    // 6. Manejo de errores del servidor
      res.status(500).json({ success: false, message: "Error del servidor" });
    }
};