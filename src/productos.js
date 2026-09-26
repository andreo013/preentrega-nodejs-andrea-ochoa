// Creo una función asíncrona para consultar productos en FakeStore.
// Recibo la ruta como parámetro para poder consultar todos los productos
// o un producto específico según el comando que escriba en la terminal.
export async function obtenerProductos(url) {
    try {
        // Uso fetch para realizar la petición y espero la respuesta de la API.
        const response = await fetch(`https://fakestoreapi.com/${url}`);

        // Convierto la respuesta recibida a formato JSON.
        const data = await response.json();

        // Devuelvo los datos para poder utilizarlos desde index.js.
        return data;

    } catch (error) {
        // Si ocurre un error durante la petición, lo muestro en la consola.
        console.log(error);
    }
}


// Creo una función asíncrona para enviar un nuevo producto a FakeStore.
// Recibo como parámetro el objeto con los datos del producto.
export async function crearProducto(producto) {
    try {
        // Uso fetch para enviar una petición POST a la API.
        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",

            // Indico que los datos que envío están en formato JSON.
            headers: {
                "Content-Type": "application/json"
            },

            // Convierto el objeto producto a JSON para poder enviarlo.
            body: JSON.stringify(producto)
        });

        // Si la respuesta es correcta, convierto los datos recibidos a JSON.
        if (response.ok) {
            const data = await response.json();

            // Muestro los datos que devuelve la API.
            console.log(data);

            // Muestro el ID asignado al producto creado.
            console.log("Id del producto creado:", data.id);
        }

    } catch (error) {
        // Si ocurre un error durante la petición, lo muestro en la consola.
        console.log(error);
    }
}

// Creo una función asíncrona para eliminar un producto de FakeStore.
// Recibo la ruta del producto que quiero eliminar.
export async function eliminarProducto(producto) {
    try {
        // Uso fetch para enviar una petición DELETE a la API.
        const response = await fetch(`https://fakestoreapi.com/${producto}`, {
            method: "DELETE"
        });

        // Convierto la respuesta recibida a formato JSON.
        const data = await response.json();

        // Devuelvo los datos para poder utilizarlos desde index.js.
        return data;

    } catch (error) {
        // Si ocurre un error durante la petición, lo muestro en la consola.
        console.log(error);
    }
}