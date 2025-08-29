import React, { useEffect, useState } from "react";
import { getOneEvento, getEventos } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { id } = useParams();
  const { setCargando } = useLoader();

  useEffect(() => {
    setCargando(true);
    const docRef = doc(db, "eventos", id);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
          //  navigate('/notFound')
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [id]);

  console.log(detalle);
  return (
    <>
      <ItemDetail detalle={detalle} />
    </>
  );
};

export default ItemDetailContainer;
