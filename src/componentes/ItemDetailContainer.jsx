import React, { useEffect, useState } from "react";
import { getOneEvento, getEventos } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});

  const { id } = useParams();
  console.log(id, "useparams");

  useEffect(() => {
    getOneEvento(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error));
  }, [id]);

  console.log(detalle);
  return (
    <>
      <ItemDetail detalle={detalle} />
    </>
  );
};

export default ItemDetailContainer;
