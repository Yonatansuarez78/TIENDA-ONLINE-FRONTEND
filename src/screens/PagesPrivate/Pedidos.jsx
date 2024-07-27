import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import NavbarPrivate from '../../components/componentesPrivate/NavbarPrivate';
import Navbar from '../../components/Navbar';

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get('/orders');
        if (response.data.message) {
          console.log(response.data.message);
          setPedidos([]); // O manejarlo de la forma que prefieras
        } else {
          setPedidos(response.data);
        }
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };


    fetchPedidos();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar pedidos: {error.message}</p>;

  return (
    <div>
      <Navbar />
      <NavbarPrivate />
      <div className="container mt-3">
        {pedidos.length === 0 ? (
          <p>No tienes pedidos.</p>
        ) : (
            <ul className="list-group">
            {pedidos.map((pedido) => (
              <li key={pedido._id} className="list-group-item d-flex flex-column bg-body-tertiary m-3">
                <div className="top-content d-flex flex-wrap justify-content-between">
                  <div className="left-content col-12 col-md-6">
                    <p>Nombre: {pedido.nombre_usuario}</p>
                    <p>Correo Electrónico: {pedido.correo_electronico}</p>
                    <p>Dirección: {pedido.direccion.direccion}, {pedido.direccion.ciudad}, {pedido.direccion.pais}</p>
                    <p>Método de Pago: {pedido.metodo_pago}</p>
                  </div>
                  <div className="right-content col-12 col-md-6 text-md-end mt-md-0">
                    <div className='mx-auto'>
                      <p>Número de pedido: {pedido.id_pedido}</p>
                      <p>Pedido efectuado: {pedido.createdAt}</p>
                    </div>
                  </div>
                </div>
                <div className="bottom-content mt-auto">
                  <h6>Productos:</h6>
                  <ul>
                    {pedido.productos.map((producto, index) => (
                      <li key={index}>
                        Cantidad: {producto.cantidad}
                      </li>
                    ))}
                  </ul>
                  <h6>Información del Producto:</h6>
                  <ul>
                    {pedido.infoProduct.map((info, index) => (
                      <li key={index}>
                        Nombre: {info.name}<br />
                        <li>Precio unitario: ${info.price}</li>
                        <li>Precio sin iva: {pedido.precioTotal}</li>
                        <li>Total: {pedido.totalConIva}</li>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Pedidos;
