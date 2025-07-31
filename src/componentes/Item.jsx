import { Link } from "react-router-dom";

const Item = ({ event }) => {
  return (
    <div className="w-72 max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={event.img}
        alt={event.nombre}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">{event.nombre}</h2>
        <p className="text-gray-600 font-semiblond mb-4">${event.precio}</p>
      <Link to={`/item/${event.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400">Ver más</Link>
      </div>
    </div>
  );
};




export default Item;