import express from 'express';
import { registerUser } from '../controllers/authController.js';
import { userLogin } from '../controllers/authController.js';

const router = express.Router();

//registrar usuarios
router.post('/register', registerUser);
//iniciar sesion
router.post('/login', userLogin);


export default router;