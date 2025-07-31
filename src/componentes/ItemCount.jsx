import { useState } from 'react';

function ItemCount({ stock, inicial, onAdd }) {
  const [cantidad, setCantidad] = useState(inicial);

  const aumentar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const disminuir = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
 <div className="flex items-center gap-4">
      <button onClick={disminuir} className="m-6 p-5 bg-gray-400 text-white px-4 py-2 rounded hover:bg-blue-400">-</button>
      <p className="text-xl font-bold">{cantidad}</p>
      <button onClick={aumentar} className="m-6 p-5 bg-gray-400 text-white px-4 py-2 rounded hover:bg-blue-400">+</button>
      <button onClick={() => onAdd(cantidad)} className="m-6 p-5 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400">
        Agregar al carrito
      </button>
    </div>
  );
}


export default ItemCount;