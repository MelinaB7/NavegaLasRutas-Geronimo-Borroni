import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import { useLoader } from "../context/LoaderContext"; 
import Swal from "sweetalert2";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [validMail, setValidMail] = useState("");
  const [orderId, setOrderId] = useState("");
  const { cart, cartTotal, clear } = useContext(CartContext);
  const { setCargando } = useLoader();

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.lastname || !buyer.address || !buyer.email) {
      Swal.fire({
      icon: "warning",
      title: "Campos incompletos",
      text: "Complete todos los campos para continuar",
      confirmButtonText: "Ok",
    });
      return;
    }
    if (buyer.email !== validMail) {
        Swal.fire({
      icon: "error",
      title: "Correos no coinciden",
      text: "Por favor verifique que los correos sean iguales",
      confirmButtonText: "Ok",
    });
      return;
    }
    const order = {
      comprador: buyer,
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp(),
    };
     setCargando(true);
    addDoc(collection(db, "orders"), order)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((err) => console.log(err))
      .finally(() => setCargando(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {orderId ? (
        <div className="bg-white p-6 rounded shadow-md text-center w-full max-w-sm">
          <h2 className="text-xl font-bold mb-2 text-black">
            ¡Felicitaciones su compra ha sido realizada con exito!
          </h2>
          <p className="text-black mb-4">ID de la compra: {orderId}</p>
          <Link
            className="inline-block bg-lime-500 text-white px-4 py-2 rounded"
            to="/"
          >
            Volver al inicio
          </Link>
        </div>
      ) : (
        <form
          className="bg-white p-6 rounded shadow-md w-full max-w-sm space-y-3"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-semibold text-center mb-4 text-black">
            Complete el formulario para finalizar su compra
          </h1>
          <input
            className="w-full border border-gray-500 px-3 py-2 rounded text-black bg-white placeholder-gray-500"
            name="name"
            placeholder="Nombre"
            type="text"
            onChange={handleChange}
          />
          <input
            className="w-full border border-gray-500 px-3 py-2 rounded text-black bg-white placeholder-gray-500"
            name="lastname"
            placeholder="Apellido"
            type="text"
            onChange={handleChange}
          />
          <input
            className="w-full border border-gray-500 px-3 py-2 rounded text-black bg-white placeholder-gray-500"
            name="address"
            placeholder="Calle y número"
            type="text"
            onChange={handleChange}
          />
          <input
            className="w-full border border-gray-500 px-3 py-2 rounded text-black bg-white placeholder-gray-500"
            name="email"
            placeholder="Correo"
            type="email"
            onChange={handleChange}
          />
          <input
            className="w-full border border-gray-500 px-3 py-2 rounded text-black bg-white placeholder-gray-500"
            name="second-email"
            placeholder="Repetir correo"
            type="email"
            onChange={(e) => setValidMail(e.target.value)}
          />
          <button
            className="w-full bg-lime-600 text-white py-2 rounded mt-2"
            type="submit"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
