import express from 'express';
import cors from 'cors';   
import mongoose from 'mongoose';    
import dotenv from 'dotenv';
import authRoute from '../backend/routes/authRoutes.js';
dotenv.config();
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//rutas
app.use('/api/auth', authRoute)


//conexion a la base de datos
mongoose.connect(process.env.DB_URI)
.then(() => console.log("✔️ Connected to database"))
.catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server is running on port ${process.env.PORT}`);
});







