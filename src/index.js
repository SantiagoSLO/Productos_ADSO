import React, { useState } from "react";
import { productos, buscarPorNombre, comprarProducto } from "./bases/import-export-productos.js";
import ReactDOM from "react-dom/client";

const Productos = () => {
  const [filtro, setFiltro] = useState("")
  const [resultado, setResultado] = useState([])
  const [mensaje, setMensaje] = useState("")
  const [cantidad, setCantidad] = useState(1)
  const [idCompra, setIdCompra] = useState("")

  const manejarBusqueda = () => {
    const encontrados = buscarPorNombre(filtro)
    setResultado(encontrados)
  };

  const manejarCompra = () => {
    comprarProducto(Number(idCompra), Number(cantidad))
      .then(men => setMensaje(men))
      .catch(mens => setMensaje(mens))
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Productos disponibles</h2>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px", borderRadius: "10px" }}
      />
      <button onClick={manejarBusqueda} style={{ padding: "10px", color: "white", backgroundColor: "blue" }}>
        <img
      src="https://images.vexels.com/media/users/3/143437/isolated/preview/390e394e1ea17f2b8361c8a16d88364e-icono-simple-lupa.png"
      alt="lupa"
      style={{ width: "40px" }}
      />
      </button>

      <table border="1" style={{ margin: "30px auto", width: "90%", borderRadius: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {resultado.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>${p.precio}</td>
              <td>{p.stock}</td>
              <td>
                <img src={p.imagen} alt={p.nombre} width="100" style={{ borderRadius: "8px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Comprar producto</h3>
      <input
        type="number"
        placeholder="ID del producto"
        value={idCompra}
        onChange={e => setIdCompra(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={e => setCantidad(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={manejarCompra} style={{ padding: "10px", backgroundColor: "green", color: "white" }}>
        Comprar
      </button>

      {mensaje && (
        <div style={{ marginTop: "20px", fontWeight: "bold", color: mensaje.includes("realizada") ? "green" : "red" }}>
          {mensaje}
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Productos />);

export default Productos;
