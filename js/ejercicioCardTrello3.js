// Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas
// Producto - categoria - precio. Realizar las siguientes tareas:
// Mostrar la tabla completa
// filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.
// Buscar un producto serum y mostrarlo por pantalla,
// Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.

let listaProductos = [
  {
    nombreProducto: "Hidratante facial",
    precio: 3500,
    categoria: "Hidratante",
  },
  { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
  {
    nombreProducto: "Protector solar factor 50",
    precio: 3300,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar toque seco factor 50",
    precio: 4100,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar con color factor 50",
    precio: 3850.5,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Gel de limpieza facial",
    precio: 1740.99,
    categoria: "Limpieza",
  },
  { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
  { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
  {
    nombreProducto: "Exfoliante de azúcar cherry",
    precio: 1200,
    categoria: "Labios",
  },
  {
    nombreProducto: "Pads de hidrogel para contorno de ojos",
    precio: 2800,
    categoria: "Ojos",
  },
  {
    nombreProducto: "Mascarilla facial",
    precio: 3250.99,
    categoria: "Mascaras",
  },
  { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
  { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
  { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
  {
    nombreProducto: "Protector solar en barra",
    precio: 3800,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Mascara de hidratación y reparación",
    precio: 1200,
    categoria: "Mascaras",
  },
  { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];

const dibujarTabla = (arreglo, titulo='Sin titulo') => {
  document.write(`<h2><strong>${titulo}</strong></h2>`)
  document.write(`<table>`);
  document.write(`<tr>`);
  document.write(`<th>Producto</th>`);
  document.write(`<th>Categoría</th>`);
  document.write(`<th>Precio</th>`);
  document.write(`</tr>`);
  for (let fila = 0; fila<arreglo.length; fila++) {
    document.write(`<tr>`);
    for (let columna = 1; columna <= 3; columna++) {
      if (columna == 1) {
        document.write(`<td>${arreglo[fila].nombreProducto}</td>`);
      }
      if (columna == 2) {
        document.write(`<td>${arreglo[fila].categoria}</td>`);
      }
      if (columna == 3) {
        document.write(`<td>$${arreglo[fila].precio}</td>`);
      }
    }
    document.write(`</tr>`);
  }
  document.write(`</table>`);
};

let listaProtectoresSolares = listaProductos.filter(producto=> producto.nombreProducto.includes('Protector solar'));
let productoSerum = listaProductos.find(producto => producto.nombreProducto.includes('Sérum'));
let productoBruma = listaProductos.find(producto => producto.nombreProducto.includes('Bruma') === true);

dibujarTabla(listaProductos,'Tabla de Productos Completa');
dibujarTabla(listaProtectoresSolares,'Tabla de Protectores Solares');
document.write(`<br>Producto Serum: ${productoSerum.nombreProducto}<br>`);
document.write(`Producto Bruma: ${productoBruma === undefined ? 'Producto no encontrado' : productoBruma } `);



