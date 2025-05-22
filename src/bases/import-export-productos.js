

export const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 2000000,
    stock: 10,
    imagen: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/16-9640/media-gallery/silver/touch/notebook-laptop-xps-16-9640-t-silver-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1324&qlt=100,1&resMode=sharp2&size=1324,804&chrss=full"
  },
  {
    id: 2,
    nombre: "Celular",
    precio: 5000000,
    stock: 20,
    imagen: "https://mastronics.vtexassets.com/arquivos/ids/163685/Celular-Apple-iPhone-16---16-Plus-Rosado-1.png?v=638636106656070000"
  },
  {
    id: 3,
    nombre: "Tablet",
    precio: 8000000,
    stock: 15,
    imagen: "https://exitocol.vteximg.com.br/arquivos/ids/26895764/Tablet-SAMSUNG-GALAXY-S6-LITE-104-Pulgadas-Wifi-128-GB-4-GB-RAM-Gris-3538040_a.jpg"
  },
  {
    id: 4,
    nombre: "Monitor",
    precio: 1000000,
    stock: 15,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwiHqYupZikh5tVtm2pratKgiYcHcARmLRA&s"
  }
];

export const buscarPorNombre = (nombre) => {
  return productos.filter(p => p.nombre.toLowerCase().includes(nombre.toLowerCase()));
};

export const comprarProducto = (id, cantidad) => {
  return new Promise((resolve, reject) => {
    const producto = productos.find(p => p.id === id);
    if (!producto) return reject("No se encontro el producto.");
    if (producto.stock < cantidad) return reject("Stock insuficiente.");
    producto.stock -= cantidad;
    resolve("Compra realizada con éxito.");
  });
};
