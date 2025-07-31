const eventos = [
  {
    id: 1,
    nombre: "Concierto Sinfónica",
    precio: 30000,
    descripcion: "Banda Sinfónica de la Universidad Nacional de Córdoba.",
    stock: 500,
    category: "Futuros-shows",
    img: "../public/conciertosinfonica.jpg",
  },

  {
    id: 2,
    nombre: "Show de Títeres",
    precio: 15000,
    descripcion:
      "Un espectáculo de títeres interactivo, apto para todo público.",
    stock: 100,
    category: "Ofertas",
    img: "../public/titeres.jpg",
  },

  {
    id: 3,
    nombre: "Obra de Teatro - El Viaje",
    precio: 22000,
    descripcion:
      "Una historia sobre la búsqueda interior a través de un viaje por Latinoamérica.",
    stock: 50,
    category: "Sorteos",
    img: "../public/obradeteatro.jpg",
  },
  {
    id: 4,
    nombre: "Festival de Danza Contemporánea",
    precio: 18000,
    descripcion:
      "Coreografías de artistas locales e internacionales en un mismo escenario.",
    stock: 200,
    category: "Futuros-shows",
    img: "../public/festivaldedanza.jpg",
  },

  {
    id: 5,
    nombre: "Cine al Aire Libre",
    precio: 10000,
    descripcion:
      "Proyección de clásicos del cine argentino en el parque Sarmiento.",
    stock: 2000,
    category: "Sorteos",
    img: "../public/cinealairelibre.webp",
  },

  {
    id: 6,
    nombre: "Stand Up - Risas en la Noche",
    precio: 16000,
    descripcion: "Una noche de comedia con los mejores comediantes de Córdoba.",
    stock: 800,
    category: "Ofertas",
    img: "../public/standup.webp",
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
