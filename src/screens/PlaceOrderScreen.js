import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useOrder } from '../context/OrderContext'
import '../style/pages/placeorderscreen.css'

import axios from '../api/axios';

const PlaceOrderScreen = () => {
  const { order, setOrder } = useOrder();
  const navigate = useNavigate();

  // Función para obtener cantidad de productos del estado - products
  const ProductCantidad = () => {
    if (order.productos.length === 0) {
      return 0;
    }
    const totalQuantity = order.productos.reduce((total, producto) => {
      return total + (parseInt(producto.cantidad, 10) || 0);
    }, 0);
    return totalQuantity;
  };
  const ProductsCantidad = ProductCantidad();


  // Función para obtener cantidad de productos del estado - infoProduct
  const infoProduct = () => {
    if (order.infoProduct.length === 0) {
      return {
        name: 'No disponible',
        price: 0
      };
    }
    const firstProduct = order.infoProduct[0];
    return {
      name: firstProduct.name,
      price: firstProduct.price
    };
  };
  const infoProducts = infoProduct();

//traer datos del precio
  const precioTotal = infoProducts.price * ProductsCantidad
  const totalConIva = (infoProducts.price * ProductsCantidad) * 1.19

  const handlePlaceOrder = async () => {
    try {
      const updatedOrder = { ...order, precioTotal, totalConIva };//agregamos los datos del precio pedido, al context
      console.log('Pedido listo para ser enviado:', updatedOrder);
      const response = await axios.post('/orders', updatedOrder);
      if (response.status === 200) {
        createAlert('Pedido realizado exitosamente', 'success');

        setOrder({ productos: [], 
          infoProduct: [], 
          nombre_usuario: '', 
          correo_electronico: '', 
          direccion: { direccion: '', ciudad: '', pais: '' },
          metodo_pago: '',
          precioTotal: '',
          totalConIva: ''
        });
        setTimeout(() => { navigate('/'); }, 5000);
      } else {
        throw new Error('Error placing order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const createAlert = (message, type) => {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible`;
    alert.role = 'alert';
    alert.innerHTML = ` ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    alertPlaceholder.appendChild(alert);
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
                <p>Pais: {order.direccion.pais || 'No disponible'}</p>
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
                <div>
                  {/* {order.productos.length > 0 ? (
                    order.productos.map((producto, index) => (
                      <div key={index}>
                        <img>{producto.image}</img>
                      </div>
                    ))
                  ) : (
                    <p>No disponible</p>
                  )} */}
                </div>
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <p> {infoProducts.name} </p>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                <h4>CANTIDAD</h4>
                <p>{ProductsCantidad}</p>
              </div>
            </div>
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td><strong>Precio unitario</strong></td>
                  <td> {infoProducts.price} </td>
                </tr>
                <tr>
                  <td><strong>Precio total</strong></td>
                  <td>{infoProducts.price * ProductsCantidad}</td>
                </tr>
                <tr>
                  <td><strong>iva</strong></td>
                  <td>19%</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td>{(infoProducts.price * ProductsCantidad) * 1.19}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={handlePlaceOrder}>
              REALIZAR PEDIDO
            </button>
            {/* <div className="my-3 col-12">
                <Message variant="alert-danger">{error}</Message>
              </div> */}
          </div>
        </div>

        <div id="liveAlertPlaceholder"></div>

      </div>
    </>
  );
};

export default PlaceOrderScreen;