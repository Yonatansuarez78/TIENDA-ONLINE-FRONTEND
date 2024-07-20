// import React from "react";
// import { Link } from "react-router-dom";
// import Header from "./../components/Header";
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// const PaymentScreen = () => {
//   const navigate = useNavigate();
//   window.scrollTo(0, 0);
//   const location = useLocation();
//   const shippingData = location.state && location.state.shippingData;

//   const onSubmit = (e) => {
//     e.preventDefault();
//     navigate('/placeorder', { state: { shippingData } });
//   };
//   return (
//     <>
//       <Header />
//       <div className="container d-flex justify-content-center align-items-center login-center">
//         <form className="Login2 col-md-8 col-lg-4 col-11" onSubmit={onSubmit}>
//           <h6>SELECCIONAR FORMA DE PAGO</h6>
//           <div className="payment-container">
//             <div className="radio-container">
//               <input className="form-check-input" type="radio" name="paymentMethod" value="PayPal" required />
//               <label className="form-check-label"> PayPal o tarjeta de crédito</label>
//             </div>
//           </div>
//           <button type="submit">Continuar</button>  
//         </form>
//       </div>
//     </>
//   );
// };

// export default PaymentScreen;


import React, { useState } from "react";
import Header from "./../components/Header";
import { useNavigate, useLocation } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

const PaymentScreen = () => {

  const { setOrder } = useOrder();
  const navigate = useNavigate();
  const [metodoPago, setMetodoPago] = useState('');
  const location = useLocation();

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const updatedShippingData = {
  //     ...shippingData,
  //     paymentMethod: paymentMethod
  //   };

  //   navigate('/placeorder', { state: { shippingData: updatedShippingData } });
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    setOrder(prevOrder => ({
      ...prevOrder,
      metodo_pago: metodoPago
    }));
    navigate('/placeorder');
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form className="Login2 col-md-8 col-lg-4 col-11" onSubmit={onSubmit}>
          <h6>SELECCIONAR FORMA DE PAGO</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="paypal"
                value="PayPal"
                onChange={(e) => setMetodoPago(e.target.value)}
                required
              />
              <label className="form-check-label" htmlFor="paypal"> PayPal o tarjeta de crédito</label>
            </div>
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="Efectivo"
                value="Efectivo"
                onChange={(e) => setMetodoPago(e.target.value)}
                required
              />
              <label className="form-check-label" htmlFor="stripe">Efectivo</label>
            </div>
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="stripe"
                value="Tarjeta"
                onChange={(e) => setMetodoPago(e.target.value)}
                required
              />
              <label className="form-check-label" htmlFor="stripe">Tarjeta</label>
            </div>
            {/* Agrega más opciones de método de pago si es necesario */}
          </div>
          <button type="submit">Continuar</button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
