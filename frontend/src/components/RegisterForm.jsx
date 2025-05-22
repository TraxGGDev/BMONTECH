const RegisterForm = () => {
  return (
    
      <div className="bg-white flex rounded-2xl shadow-lg max-w-4xl p-6 sm:p-10 w-full">
        
        {/* Formulario */}
        <div className="sm:w-1/2 w-full px-4 sm:px-8">
          <h2 className="text-3xl font-bold text-slate-700">Crea tu cuenta</h2>

          <form className="flex flex-col gap-4 mt-6">
            <input
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
              type="text"
              name="username"
              placeholder="Nombre de usuario"
            />
            <input
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
              type="email"
              name="email"
              placeholder="Correo electrónico"
            />
            <input
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
              type="password"
              name="password"
              placeholder="Contraseña"
            />
            <button
              className="bg-slate-700 cursor-pointer hover:bg-slate-800 transition text-white py-3 rounded-xl font-medium"
              type="submit"
            >
              Registrarse
            </button>
          </form>

          <div className="mt-8 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-300" />
            <p className="text-center text-sm">O</p>
            <hr className="border-gray-300" />
          </div>

          <button className=" cursor-pointer bg-white border border-gray-300 py-3 w-full rounded-xl mt-5 hover:bg-gray-50 transition">
            Registrarse con Google
          </button>

          <div className="mt-4 text-xs flex justify-between items-center text-slate-500">
            <p>¿Ya tienes una cuenta?</p>
            <button className=" cursor-pointer py-2 px-4 bg-white border rounded-xl hover:bg-gray-100 transition text-sm">
              Iniciar sesión
            </button>
          </div>
        </div>

        {/* Imagen */}
        <div className="hidden sm:block w-1/2">
          <img
            className="rounded-2xl object-cover h-full"
            src="/img/5230868.png"
            alt="Imagen de registro"
          />
        </div>
      </div>
    
  );
};

export default RegisterForm;
