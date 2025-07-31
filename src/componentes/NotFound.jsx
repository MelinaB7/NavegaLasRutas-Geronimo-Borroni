import { Link } from "react-router-dom";

 const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 select-none">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Página no encontrada</h2>
          <p className="text-gray-600 mb-8">Lo sentimos, la página que buscas no existe</p>
        </div>
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-6xl">🔍</span>
          </div>
        </div>
        <div className="space-y-4">
         <Link to={"/"} className="block w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition" > Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;