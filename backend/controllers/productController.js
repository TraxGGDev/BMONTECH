import Product from "../models/Product.js";

//Cteat un producto nuevo
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