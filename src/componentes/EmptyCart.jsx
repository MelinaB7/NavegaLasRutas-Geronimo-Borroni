import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-white p-6">
      <h2 className="text-3xl font-bold mb-4 text-lime-400">
        🛒 Tu carrito está vacío
      </h2>
      <h4 className="text-lg mb-6 text-white/80">
        Te invitamos a conocer nuestros eventos
      </h4>
      <Link
        to="/"
        className="bg-lime-500 hover:bg-lime-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition"
      >
        Ir al inicio
      </Link>
    </div>
  );
};

export default EmptyCart;
