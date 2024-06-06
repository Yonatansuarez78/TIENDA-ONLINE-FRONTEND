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

const PaymentScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const shippingData = location.state && location.state.shippingData;

  const [paymentMethod, setPaymentMethod] = useState(""); // Estado local para el método de pago

  const onSubmit = (e) => {
    e.preventDefault();

    // Agrega el método de pago al objeto shippingData
    const updatedShippingData = {
      ...shippingData,
      paymentMethod: paymentMethod
    };

    navigate('/placeorder', { state: { shippingData: updatedShippingData } });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
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
                value="PayPal"
                checked={paymentMethod === "PayPal"}
                onChange={handlePaymentChange}
                required
              />
              <label className="form-check-label"> PayPal o tarjeta de crédito</label>
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
