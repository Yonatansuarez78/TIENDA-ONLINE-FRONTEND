import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';

const ShippingScreen = () => {
  const navigate = useNavigate();
  // window.scrollTo(0, 0);

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/payment');
  };

  
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={onSubmit}>
          <h6>DIRECCIÓN DE ENTREGA</h6>
          <input type="text" placeholder="Ingresa el pais" required/>
          <input type="text" placeholder="Ingresa tu codigo postal" required />
          <input type="text" placeholder="Ingresa la ciudad" required />
          <input type="text" placeholder="Ingresa la direccion" required />
          <button type="submit">Continuar</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
