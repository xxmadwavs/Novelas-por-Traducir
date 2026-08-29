# Novelas por Traducir

Web estática de 2 archivos, sin base de datos. Ideal para GitHub Pages.

Sirve para coordinar traducciones: un catálogo de novelas donde cada ficha dice si está libre o si alguien ya la ha escogido, para que nadie duplique el trabajo.

## Archivos

- `index.html` → la página pública. No hace falta tocarla nunca.
- `books-data.js` → los datos de las novelas.
- `admin.html` → un escritorio para añadir/editar novelas y generar `books-data.js` sin escribir código a mano. Solo lo usas tú, no lo enlaces desde `index.html`.

## Usar el escritorio (admin.html)

1. Abre `admin.html` en el navegador (haciendo doble clic, no hace falta subirlo a ningún sitio).
2. Si ya tienes novelas, pega el contenido actual de `books-data.js` en el paso 1 y pulsa «Importar lista».
3. Añade novelas nuevas con el formulario, o edita/marca escogida-libre las que ya tengas en la lista.
4. Todo lo que hagas se guarda automáticamente en el navegador mientras trabajas, así que puedes cerrar y volver sin perder nada.
5. Cuando esté lista, pulsa «Descargar books-data.js» (o «Copiar código») y sustituye el archivo en tu carpeta del repositorio.
6. Sube el cambio a GitHub como siempre.

## Publicarla en GitHub Pages

1. Crea un repositorio nuevo (o usa uno existente) y sube `index.html` y `books-data.js` a la raíz.
2. En el repositorio: **Settings → Pages → Source** → selecciona la rama (normalmente `main`) y la carpeta `/root`.
3. Guarda. GitHub te dará una URL tipo `https://tuusuario.github.io/turepo/` en un par de minutos.

## Añadir o actualizar una novela

Abre `books-data.js`, copia un bloque `{ ... }` existente y pégalo dentro de los corchetes `[ ]`, rellenando los campos. Las instrucciones están en comentarios al principio del archivo.

Para marcar una novela como escogida o libre, solo cambia `escogida: true` ↔ `escogida: false` y guarda. Al subir el cambio a GitHub, la web se actualiza sola.

## Portadas

Puedes usar una URL de internet, o subir tus propias imágenes a una carpeta (por ejemplo `portadas/`) del repositorio y poner la ruta relativa, ej. `"portadas/mapa-del-silencio.jpg"`.
