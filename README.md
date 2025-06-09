# 🛒 BMONTECH – Proyecto Full Stack eCommerce

**BMONTECH** es un proyecto personal de tienda en línea desarrollado con tecnologías modernas de frontend y backend.  
El backend ya cuenta con las funcionalidades principales, y el frontend ya consume la API para mostrar productos.

---

## 🚀 Tecnologías utilizadas

### 🧠 Backend
- ⚙️ Node.js + Express
- 🛢️ MongoDB (Mongoose)
- 🔐 Dotenv, CORS  
- 🧱 Estructura modular (rutas, modelos, controladores)
- 🛡️ *(En desarrollo)*: Rutas protegidas, carrito

### 🎨 Frontend
- ⚛️ React + Vite
- 💨 Tailwind CSS
- 🔗 Fetch API (conexión al backend)

---

## 📦 Funcionalidades implementadas

✅ CRUD completo de productos  
✅ Conexión con MongoDB Atlas  
✅ Frontend conectado al endpoint de productos  
🛠️ Autenticación y rutas protegidas en desarrollo

---

## 📁 Estructura del proyecto

BMONTECH/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.jsx
│ ├── index.html
│ ├── tailwind.config.js
│ └── vite.config.js

---

## 🧪 Instalación local

### 🔙 Backend
```bas
cd backend
npm install


Crea un archivo .env:
PORT=5000
MONGO_URI=tu_conexion_mongo


Inicia el servidor:
npm run dev

🔜 Frontend
cd frontend
npm install
npm run dev


📌 Estado del proyecto
Módulo	Estado	Notas
Backend	✅ Completo	Falta agregar autenticación y proteger rutas
Frontend	🛠️ En progreso	Muestra productos desde el backend vía fetch

🧑‍💻 Autor
OScar Perez
📫 GitHub
📧 traxgg17@gmail.com
