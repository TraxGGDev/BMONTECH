import Product from "../models/Product.js";

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
}