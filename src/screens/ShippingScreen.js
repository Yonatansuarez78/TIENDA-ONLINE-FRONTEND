import React, { useState, useEffect } from "react";
import Header from "../components/Header";

import { useNavigate, useLocation } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';

const ShippingScreen = () => {
  const { setOrder } = useOrder();
  const navigate = useNavigate();
  const location = useLocation();

  const [direccion, setDireccion] = useState({
    pais: '',
    ciudad: '',
    direccion: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setOrder(prevOrder => ({
      ...prevOrder,
      direccion
    }));
    navigate('/payment');
  };
  

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={onSubmit}>
          <h6>DIRECCIÓN DE ENTREGA</h6>
          <input
            type="text"
            placeholder="Ingresa el país"
            value={direccion.pais}
            onChange={(e) => setDireccion({ ...direccion, pais: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Ingresa la ciudad"
            value={direccion.ciudad}
            onChange={(e) => setDireccion({ ...direccion, ciudad: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Ingresa la dirección"
            value={direccion.direccion}
            onChange={(e) => setDireccion({ ...direccion, direccion: e.target.value })}
            required
          />
          <button type="submit">Continuar</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
