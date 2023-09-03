# iTunes API Tester

**Autor:**
Univ: Amir Rashad Barra Salaues
Universidad: UMSS

## Funcionalidades

-Realizar una busqueda de un texto en la api de iTunes con algun filtro como ser: Música, Podcast y Audiolibro o all.
-Filtrar los resultados obtenidos ya sea de A-Z o de Z-A.
-Ver una lista de tarjetas con los albumes encontrados segun la busqueda.
-Poder hacer clic en el icono de iTunes del album para abrir una nueva pestaña e ir al album desde la pagina de iTunes.
-Ver la lista de canciones o audios que componenen al album
-Poder reproducir las canciones o audios del album presionando el boton Play.

## Características

- En el filtro, nos enfocamos en los elementos con audio para mostrarlos como: Música, Podcast y Audiolibro.
- Al ingresar un texto de búsqueda y seleccionar el tipo de resultado deseado, obtenemos los álbumes correspondientes.
- En la parte superior, se indica el tipo de álbum obtenido, y al hacer clic en el ícono de iTunes, se redirige al álbum en iTunes.
- Mostramos la información solicitada del álbum.
- Los álbumes pueden contener diversas canciones u otro contenido, por lo que puedes ver el nombre de las canciones del álbum y reproducir una parte de ellas.

## Tecnologías Utilizadas

- Visual Studio (Entorno de Desarrollo)
- [Vite](https://vitejs.dev/) (Bundler/Build Tool)
- [React](https://reactjs.org/) (Biblioteca de JavaScript para construir interfaces de usuario)
- [React DOM](https://reactjs.org/docs/react-dom.html) (Librería para trabajar con el DOM en React)
- [Bootstrap](https://getbootstrap.com/) (Framework de diseño CSS)
- [use-sound](https://www.npmjs.com/package/use-sound) (Librería para trabajar con sonidos en React)

## Requisitos Previos

Antes de utilizar este proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/): Asegúrate de tener Node.js instalado en tu sistema.
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/): Utilizamos npm o Yarn como administradores de paquetes para instalar las dependencias del proyecto.

## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu entorno local:

```bash
# 1.- Clona este repositorio en tu máquina local utilizando Git:
git clone https://github.com/R4shad/itunes.git
# 2.-  Ve al directorio del proyecto
cd tu-proyecto
# 3.- Instala las dependencias del proyecto
npm install
# O si prefieres Yarn
yarn install
# 4.- Inicia el servidor de desarrollo
npm run dev
# O con Yarn
yarn dev
# 5.-Abre en tu navegador y accede a la aplicacion en http://localhost:5173/
```

## Notas Adicionales

- Tenga en cuenta que la reproducción de los audios puede experimentar un ligero retraso debido a la descarga de los archivos de audio desde la API. Esto es completamente normal y puede variar según la velocidad de su conexión a Internet y el tamaño de los archivos de audio.
