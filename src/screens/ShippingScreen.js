import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate, useLocation } from 'react-router-dom';

const ShippingScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Inicializa shippingData con los datos del estado de la ubicación si existen
  const initialShippingData = location.state?.shippingData || {
    country: "",
    city: "",
    address: ""
  };

  const [shippingData, setShippingData] = useState(initialShippingData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingData({ ...shippingData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { shippingData } });
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
            name="country"
            value={shippingData.country}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Ingresa la ciudad"
            name="city"
            value={shippingData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Ingresa la dirección"
            name="address"
            value={shippingData.address}
            onChange={handleChange}
            required
          />
          <button type="submit">Continuar</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
