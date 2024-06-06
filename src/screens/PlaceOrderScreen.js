import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  window.scrollTo(0, 0);
  const location = useLocation();

  const shippingData = location.state && location.state.shippingData;
  console.log(shippingData)

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/order');
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
                <p>{user.username}</p>
                <p>{user.email}</p>
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
                <p>Pais: {shippingData.country}</p>
                <p>Ciudad: {shippingData.city} </p>
                <p>direccion: {shippingData.address} </p>
                <p>Codigo postal: {shippingData.postalCode} </p>
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
                <h5>
                  <strong>Entregar a</strong>
                  <p>{user.username}</p>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {/* <Message variant="alert-info mt-5">Your cart is empty</Message> */}

            <div className="order-product row">
              <div className="col-md-3 col-6">
                <img src="/images/8.png" alt="product" />
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link to={"/"}>
                  <h6>
                    Zapatos Nike para niñas</h6>
                </Link>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                <h4>CANTIDAD</h4>
                <h6>4</h6>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                <h4>SUBTOTAL</h4>
                <h6>$567</h6>
              </div>
            </div>
          </div>
          {/* total */}
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Productos</strong>
                  </td>
                  <td>$345</td>
                </tr>
                <tr>
                  <td>
                    <strong>Envío</strong>
                  </td>
                  <td>$123</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  <td>$5</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>$5678</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" onClick={onSubmit}>
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
