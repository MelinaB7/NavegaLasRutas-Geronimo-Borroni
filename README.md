# Clixpass 🎟️  

Clixpass es un sitio web para la **venta de entradas a shows y eventos**.  
El usuario puede navegar entre distintos espectáculos, filtrarlos por categorías y gestionar su compra mediante el carrito.  

---

## Funcionalidades principales  
- **Exploración de eventos:** listado de shows disponibles.  
- **Filtrado por categorías:**  
  - Futuros shows  
  - Ofertas  
  - Sorteos  
- **Detalle de eventos:** cada tarjeta incluye título, descripción, precio y stock disponible y permite agregarlos al carrito.  
- **Carrito de compras:**  
  - Visualización en la parte superior derecha con número de entradas agregadas.  
  - Posibilidad de vaciar el carrito o finalizar la compra.  
  - Visualizacion del detalle de la compra.
- **Proceso de compra:**  
  - Formulario de usuario al finalizar la compra.  
  - Datos almacenados en **Firebase**.  

---

## ⚙️ Tecnologías utilizadas  
- **Lenguajes:** JavaScript  
- **Frameworks y librerías:** React  
- **Base de datos y backend:** Firebase  
- **Estilos:** Tailwind CSS  

---

## Flujo del usuario  
1. El usuario navega por los eventos y aplica filtros si lo desea.  
2. Desde cada evento puede ver más información y agregar entradas al carrito.  
3. El carrito muestra la cantidad de entradas seleccionadas y permite gestionarlas.  
4. Al finalizar la compra, completa el formulario con sus datos.  
5. La información se guarda en Firebase y se confirma la compra.  
