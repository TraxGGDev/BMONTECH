import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res)=>{
    try{
    // 1. Obtener datos del cuerpo de la petición (username, email, password)
     const {username, email, password} = req.body;

    // 2. Validar que los campos no estén vacíos
    // Si falta alguno, responde con estado 400 y un mensaje adecuado
    if(!username || !email || !password){
    
        return res.status(400).json({message:"Todos los campos son requeridos"});
    }

    // 3. Verificar si el correo ya está registrado en la base de datos
    // Usa User.findOne({ email }) para buscar un usuario existente
    const userExist = await User.findOne({email})

    // 4. Si ya existe, responde con estado 409 (conflict) y un mensaje
    if (userExist){
        return res.status(409).json({message:"Este correo ya esta registrado"});
    }
   
    
    // 5. Encriptar la contraseña con bcrypt
    // Usa bcrypt.genSalt y bcrypt.hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
   

    // 6. Crear un nuevo objeto User con los datos y contraseña encriptada
    const newUser = new User({
        username,
        email,
        password:hashedPassword
    });
    

    // 7. Guardar el usuario en la base de datos usando .save()

    await newUser.save();
    

    // 8. Enviar respuesta con estado 201 (created) y un mensaje de éxito

    return res.status(201).json({message:"Usuario registrado con exito"})
    }
    catch(error){
        console.error('❌ Error al registrar usuario:', error);
        if (process.env.NODE_ENV === "development") {
      res.status(500).json({ message: error.message, stack: error.stack });
    } else {
      res.status(500).json({ message: "Error del servidor." });
    }

    }
};