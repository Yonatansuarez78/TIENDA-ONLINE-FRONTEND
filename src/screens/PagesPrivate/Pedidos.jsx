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
          setPedidos([]);
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

  return (
    <div>
      <Navbar />
      <NavbarPrivate />
      <div className="container mt-5">

        {loading && <div className="text-center fs-5 text-muted">Cargando pedidos...</div>}
        {error && <div className="alert alert-danger text-center">Error al cargar pedidos</div>}

        {pedidos.length === 0 && !loading ? (
          <div className="text-center text-muted">
            <i className="bi bi-emoji-frown fs-1"></i>
            <p className="mt-2">No tienes pedidos realizados aún.</p>
          </div>
        ) : (
          <div className="row g-4">
            {pedidos.map((pedido) => (
              <div key={pedido._id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-lg border-0 rounded-4 card-hover">
                  <div className="card-header bg-gradient bg-primary text-white rounded-top-4 d-flex align-items-center">
                    <i className="bi bi-receipt-cutoff fs-4 me-2"></i>
                    <h5 className="mb-0">Pedido #{pedido.id_pedido}</h5>
                  </div>
                  <div className="card-body bg-light-subtle">
                    <p><i className="bi bi-person-circle me-2 text-secondary"></i><strong>Nombre:</strong> {pedido.nombre_usuario}</p>
                    <p><i className="bi bi-envelope-check me-2 text-secondary"></i><strong>Email:</strong> {pedido.correo_electronico}</p>
                    <p><i className="bi bi-geo-alt me-2 text-secondary"></i><strong>Dirección:</strong> {pedido.direccion.direccion}, {pedido.direccion.ciudad}, {pedido.direccion.pais}</p>
                    <p><i className="bi bi-credit-card-2-front me-2 text-secondary"></i><strong>Pago:</strong> {pedido.metodo_pago}</p>
                    <p><i className="bi bi-calendar-event me-2 text-secondary"></i><strong>Fecha:</strong> {new Date(pedido.createdAt).toLocaleString()}</p>
                    <hr />
                    <h6 className="mt-3"><i className="bi bi-tags-fill me-2"></i>Detalles del producto:</h6>
                    <ul className="list-group list-group-flush">
                      {pedido.infoProduct.map((info, index) => (
                        <li key={index} className="list-group-item">
                          <i className="bi bi-box me-2 text-info"></i><strong>{info.name}</strong><br />

                          <ul className="list-group list-group-flush">
                            {pedido.productos.map((producto, index) => (
                              <li key={index} className="list-group-item">
                                <i className=""></i>
                                Cantidad: {producto.cantidad}
                              </li>
                            ))}
                          </ul>
                          <i className="bi bi-currency-dollar text-success me-2"></i>Precio unitario: ${info.price}<br />
                          <i className="bi bi-percent me-2 text-muted"></i>Precio sin IVA: ${pedido.precioTotal}<br />
                          <i className="bi bi-receipt me-2 text-warning"></i>Total con IVA: ${pedido.totalConIva}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-footer bg-white text-center">
                    <i className="bi bi-truck text-primary me-2"></i>
                    <span className="fw-semibold text-muted">En proceso de entrega</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Estilos adicionales */}
      <style>{`
        .card-hover:hover {
          transform: scale(1.02);
          transition: 0.3s ease-in-out;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
}

export default Pedidos;
