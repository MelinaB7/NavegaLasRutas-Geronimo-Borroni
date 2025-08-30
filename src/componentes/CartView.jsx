import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, clear, removeItem, cartTotal } = useContext(CartContext);
  const preConfirm = () => {
    Swal.fire({
      title: "¿Estas seguro de borrar todo el carrito?",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
      } else if (result.isDenied) {
        
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Tu carrito</h1>

      <div className="space-y-6">
        {cart.map((compra) => (
          <div
            key={compra.id}
            className="flex justify-between items-center border rounded-lg p-4 shadow-md"
          >
            <img
              src={compra.img}
              alt={compra.nombre}
              className="w-32 h-auto rounded-md"
            />
            <span className="font-medium">{compra.nombre}</span>
            <span className="text-white">${compra.precio},00</span>
            <span className="text-white">Unidades: {compra.cantidad}</span>
            <span className="font-semibold text-green-600">
              Total: ${compra.precio * compra.cantidad},00
            </span>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
              onClick={() => {
                removeItem(compra.id);
              }}
            >
              ✖
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xl font-semibold text-center">
        Total a pagar: ${cartTotal()},00
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md"
          onClick={() => {
            preConfirm ();
            clear ();
          }}
        >
          Borrar Carrito
        </button>
        <Link
          to="/checkout"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md"
        >
          Terminar Compra
        </Link>
      </div>
    </div>
  );
};

export default CartView;
