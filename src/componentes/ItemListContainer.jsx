import { useEffect, useState } from "react";
import { getEventos, eventos } from "../mock/AsyncService";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = ({ saludo }) => {
  const [data, setData] = useState([]);
  const { category } = useParams();
  const { setCargando } = useLoader();

  useEffect(() => {
    setCargando(true);
    const productsCollection = category
      ? query(collection(db, "eventos"), where("category", "==", category))
      : collection(db, "eventos");

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [category]);

  console.log(data, "data");
  return (
    <div>
      <h1 className="text-2xl md:text-5xl font-extrabold text-white leading-tight p-5 m-10">
        Compra entradas para tus{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          espectáculos
        </span>{" "}
        favoritos
      </h1>
      <ItemList data={data} />
    </div>
  );
};
export default ItemListContainer;
