/* ============================================================
   FICHERO DE NOVELAS — edítalo a mano para añadir o actualizar novelas
   ============================================================

   Cómo añadir una novela nueva:
   1. Copia uno de los bloques { ... } de abajo (incluida la coma final).
   2. Pégalo dentro de los corchetes [ ], en cualquier posición.
   3. Rellena cada campo. Guarda el archivo y sube el cambio a GitHub.

   Campos:
     titulo      → texto, obligatorio
     autora      → texto, obligatorio
     anio        → número (ej. 2023)
     paginas     → número (ej. 340)
     portada     → URL de la imagen de portada (o ruta local, ej. "portadas/libro1.jpg")
     sinopsis    → texto, puede ser largo
     cogida      → true si alguien ya la está traduciendo, false si está libre
     cogidaPor   → (opcional) nombre de quién la está traduciendo. "" si no quieres anotarlo.
     serie       → true si tiene adaptación a serie/drama, false si no
     saga        → (opcional) nombre de la saga a la que pertenece. "" si es una novela única.
     sagaNumero  → (opcional) número dentro de la saga. null si no aplica.

   Para marcar una novela como libre de nuevo: cambia "cogida: true" a "cogida: false".
   Para marcar una novela como cogida: cambia "cogida: false" a "cogida: true"
   y opcionalmente rellena "cogidaPor".
   ============================================================ */

const LIBROS = [
  {
    titulo: "El Mapa del Silencio",
    autora: "Nombre Autora",
    anio: 2023,
    paginas: 312,
    portada: "https://via.placeholder.com/400x600/2a4438/e8dcc3?text=Portada",
    sinopsis: "Sustituye este texto por la sinopsis real de la novela. Puede ser tan larga como quieras: se mostrará completa al abrir la ficha.",
    cogida: false,
    cogidaPor: "",
    serie: true,
    saga: "",
    sagaNumero: null
  },
  {
    titulo: "Donde Crecen los Almendros",
    autora: "Nombre Autora",
    anio: 2021,
    paginas: 288,
    portada: "https://via.placeholder.com/400x600/2a4438/e8dcc3?text=Portada",
    sinopsis: "Sustituye este texto por la sinopsis real de la novela.",
    cogida: true,
    cogidaPor: "Marta",
    serie: false,
    saga: "ALMENDROS",
    sagaNumero: 1
  },
  {
    titulo: "Cartas que Nunca Envié",
    autora: "Nombre Autora",
    anio: 2024,
    paginas: 401,
    portada: "https://via.placeholder.com/400x600/2a4438/e8dcc3?text=Portada",
    sinopsis: "Sustituye este texto por la sinopsis real de la novela.",
    cogida: false,
    cogidaPor: "",
    serie: false,
    saga: "",
    sagaNumero: null
  }
];
