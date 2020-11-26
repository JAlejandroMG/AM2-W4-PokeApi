//+ 20201119
//* Creación de estructura de archivos separando los componentes como archivos JSX en la carpeta components y sus archivos de estilo CSS con el mismo nombre.
//+ 20201120
//* Added: container in App.js / Fixed: styles in App.css 
//* Added: divs in card.jsx / Fixed styles in card.css
//+ 20201121
//* Pagination (9) Done
//* Card (3) Done
//* Modal (4) Done
//+ 20201122
//* Fixed: modal button
//* Partially done
//+ 20201123
//* Cambiar el fetch de card.jsx a pokemonDetail.jsx usando condicional para renderizar los detalles de cada pokemon solo cuando el estado de dichos detalles no este vacío
//! Hecho
//* Agregar hover a tarjetas
//! Hecho
//{ Agregar estilos a background tarjetas y modal de cada pokemonDetail
//! Hecho
//{ Agregar transición a cambio de página
//} Personalizar la cantidad de tarjetas a mostrar por página input de número
//} Ponerle flechas a los lados para cambio de página


//{ El objetivo será usar los componentes de estado y la API pokeapi para poder listar los pokémones dependiendo de la página que se esté solicitando en el momento. API a usar: https://pokeapi.co/
//[ 1. Crear un contenedor donde listaremos los pokémones (componente Card)
//! Hecho
//[ 2. Crear el componente y estructura para mostrar cada uno de los pokémones (Card).
//! Hecho
//[ 3. El componente Card deberá cumplir con las siguientes características:
//* a. Número de pokémon
//* b. Nombre de pokémon
//* c. Imagen del pokémon
//* d. Botón de detalle
//! Hecho
//[ 4. Al dar click sobre el botón de detalle se deberá mostrar un “modal” donde muestre más información del Pokémon. Puedes usar el siguiente paquete para agregar el modal https://github.com/reactjs/react-modal
//! Hecho
//[ 5. Crear un componente PokemonDetail que tenga las siguientes características:
//* a. Todas las características de Card excepto el botón de detalle
//* b. Tipo o especie de Pokémon (Ejemplo Grass, Poison)
//* c. Stats
    //*i. HP (puntos de vida)
    //* ii. Attack (Ataque)
    //* iii. Defense (Defensa)
    //* iv. Speed (Velocidad)
//! Hecho
//[ 6. Puedes tomar como referencia el diseño de la izquierda
//! Hecho
//[ 7. Cuando se muestre el modal deberás de hacer una petición con fetch o axios donde pidas el detalle del Pokémon, para este punto deberás montar el componente PokemonDetail y hacer una petición para obtener los detalles del Pokémon solicitado.
//[ 8. La petición será de tipo GET hacía la siguiente URL https://pokeapi.co/api/v2/pokemon/bulbasaur ó https://pokeapi.co/api/v2/pokemon/1
//[ 9.Agregar un componente de paginación con la funcionalidad de mostrar 10 páginas y estás se vayan recorriendo conforme se van solicitando las páginas además cada elemento (página) podrá hacer una petición para obtener los pokémones que pertenezcan a esa página y colocarlos en el estado principal.
//! Hecho


//{ Puedes inspirarte en los siguientes diseños:
//[ https://pokedex-academlo-v.netlify.app/
//[ https://pokedex-app1.netlify.app/
//[ https://thirsty-almeida-714889.netlify.app/
//[ https://dribbble.com/shots/6175056-Pok-dex
//[ https://dribbble.com/shots/6540871-Pokedex-App
//[ https://www.behance.net/gallery/95727849/Pokdex-App?tracking_source=search_projects_recommended%7Cpokemon%20app
