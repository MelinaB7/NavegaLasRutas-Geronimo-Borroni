
import ItemCount from "./ItemCount"

const ItemDetail = ({detalle}) => {
  const onAdd = (cantidad)=>{
    console.log(`Compraste ${cantidad} de productos`)
  }

  return (
    <div className="max-w-md mx-auto rounded-lg shadow-md overflow-hidden p-6 w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <h1 className="font-semibold text-xl">Detalle del evento:  {detalle.nombre}</h1>
        <img alt={detalle.nombre} src={detalle.img} />
        <p className="text-lg text-blue-600 font-bold mb-1">{detalle.descripcion}</p>
        <p className="text-red-700 font-medium">Stock: {detalle.stock} Lugares disponibles</p>
        <p className="font-medium">Precio: ${detalle.precio}</p>
        <ItemCount stock={detalle.stock} inicial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail;