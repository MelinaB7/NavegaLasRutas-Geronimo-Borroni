export const eventos = [


  {
      nombre: "Show de Títeres",
    precio: 15000,
    descripcion:
      "Un espectáculo de títeres interactivo, apto para todo público.",
    stock: 100,
    category: "Ofertas",
    img: "https://i.postimg.cc/xCHHxKpV/titeres.jpg",
  },

  {

    nombre: "Obra de Teatro - El Viaje",
    precio: 22000,
    descripcion:
      "Una historia sobre la búsqueda interior a través de un viaje por Latinoamérica.",
    stock: 50,
    category: "Sorteos",
    img: "https://i.postimg.cc/8zKhjkf9/obradeteatro.jpg",
  },
  {

    nombre: "Festival de Danza Contemporánea",
    precio: 18000,
    descripcion:
      "Coreografías de artistas locales e internacionales en un mismo escenario.",
    stock: 200,
    category: "Futuros-shows",
    img: "https://i.postimg.cc/bNP05BjC/festivaldedanza.jpg",
  },

  {

    nombre: "Cine al Aire Libre",
    precio: 10000,
    descripcion:
      "Proyección de clásicos del cine argentino en el parque Sarmiento.",
    stock: 2000,
    category: "Sorteos",
    img: "https://i.postimg.cc/j206t8nj/cinealairelibre.webp",
  },

  {
    nombre: "Stand Up - Risas en la Noche",
    precio: 16000,
    descripcion: "Una noche de comedia con los mejores comediantes de Córdoba.",
    stock: 800,
    category: "Ofertas",
    img: "https://i.postimg.cc/DzS1sVqZ/standup.webp",
  },
];
export const getEventos = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error, intente mas tarde");
      } else {
        resolve(eventos);
      }
    }, 2000);
  });
};

export const getOneEvento = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let oneEvento = eventos.find((event) => event.id === Number(id));
      resolve(oneEvento);
    }, 2000);
  });
};
