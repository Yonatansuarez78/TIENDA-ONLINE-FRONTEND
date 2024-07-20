import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { PayPalButton } from "react-paypal-button-v2";

import { useOrder } from '../context/OrderContext'

import '../style/pages/placeorderscreen.css'


const PlaceOrderScreen = () => {
  const { order } = useOrder();
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    try {
      // Aquí puedes agregar lógica para enviar el pedido a la API si estás listo para hacerlo
      console.log('Pedido listo para ser enviado:', order);
      // Ejemplo de envío a la API
      // const response = await fetch('/api/orders', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(order),
      // });

      // if (response.ok) {
      //   navigate('/order-confirmation');
      // } else {
      //   throw new Error('Error placing order');
      // }

      navigate('/order-confirmation'); // Navega a la página de confirmación si estás listo
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row  order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row ">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i class="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Cliente</strong>
                </h5>
                <p>{order.nombre_usuario || 'No disponible'}</p>
                <img src={`${process.env.PUBLIC_URL}/images/user.png`} alt="User Avatar" className="ImgUser" />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Información del pedido</strong>
                </h5>
                <p>Pais: { order.direccion.pais || 'No disponible' }</p>
                <p>Ciudad: {order.direccion.ciudad || 'No disponible'} </p>
                <p>direccion: {order.direccion.direccion || 'No disponible'} </p>
                <p>paymentMethod: {order.metodo_pago || 'No seleccionado'} </p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5><strong>Entregar a</strong></h5>
                <p> {order.nombre_usuario || 'No disponible'} </p>
                <p> {order.correo_electronico || 'No disponible'} </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">

            <div className="order-product row">
              <div className="col-md-3 col-6">
                {/* LLAMAR A LA API, PARA MOSTRAR LOS DATOS DEL PRODUCTO */}
                {/* <img src={selectedProduct.image} alt="product" /> */}
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                {/* <h6>{selectedProduct.name}</h6> */}
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                <h4>CANTIDAD</h4>
                {/* <h6> {order.productos.cantidad} </h6> */}
                <ul>
                  {order.productos.length > 0 ? (
                    order.productos.map((producto, index) => (
                      <li key={index}>
                        <p> {producto.cantidad}</p>
                      </li>
                    ))
                  ) : (
                    <p>No hay productos en el pedido</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td><strong>Precio unitario</strong></td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td><strong>Precio total</strong></td>
                  <td>20000</td>
                </tr>
                <tr>
                  <td><strong>iva</strong></td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td>23000</td>
                </tr>
              </tbody>
            </table>
            <button type="submit">
              REALIZAR PEDIDO
            </button>
            {/* <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;