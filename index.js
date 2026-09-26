// Importo las funciones que necesito desde el archivo productos.js.
import {
  obtenerProductos,
  crearProducto,
  eliminarProducto
} from "./src/productos.js";


// process.argv contiene los argumentos que escribo
// al ejecutar mi programa desde la terminal.

// Uso slice(2) para ignorar las dos primeras posiciones
// y quedarme solamente con los argumentos que escribo.
const args = process.argv.slice(2);

// Uso destructuring para guardar cada argumento
// en una variable según su posición.
const [metodo, recurso, title, precio, category] = args;


// Uso switch para evaluar el primer argumento
// y decidir qué operación debo realizar.
switch (metodo) {

  case "GET":
    console.log(metodo);

    // Verifico que exista el recurso y que comience con "products".
    // Esto permite usar tanto "products" como "products/15".
    if (recurso && recurso.startsWith("products")) {

      // Llamo a la función y le paso la ruta recibida en la terminal.
      const productos = await obtenerProductos(recurso);

      // Muestro los productos obtenidos.
      console.log(productos);

    } else {
      console.log("Comando incorrecto");
    }

    break;

  case "POST":
    console.log(metodo);

    // Verifico que estén todos los datos necesarios
    // y que el recurso sea exactamente "products".
    if (recurso && title && precio && category && recurso === "products") {

      // Creo un objeto con los datos que recibo desde la terminal.
      const datosProducto = {
        title,
        price: Number(precio),
        category
      };

      // Uso spread para copiar las propiedades
      // de datosProducto dentro de un nuevo objeto.
      const nuevoProducto = {
        ...datosProducto
      };

      // Envío el nuevo producto a la API.
      await crearProducto(nuevoProducto);

      console.log("Producto creado");

    } else {
      console.log("Comando incompleto");
    }

    break;

  case "DELETE":
    console.log(metodo);

    // Verifico que exista el recurso, que comience con "products/"
    // y que haya un ID después de la barra.
    if (recurso && recurso.startsWith("products/") && recurso.length > 9) {

      // Llamo a la función para eliminar el producto
      // y le paso la ruta recibida desde la terminal.
      const response = await eliminarProducto(recurso);

      // Muestro la respuesta que devuelve la API.
      console.log("Producto eliminado", response);

    } else {
      console.log("Comando incompleto o incorrecto");
    }

    break;

  default:
    console.log("Comando incorrecto");
}