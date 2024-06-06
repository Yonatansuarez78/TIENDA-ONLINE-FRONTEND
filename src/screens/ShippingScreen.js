import React, {useState} from "react";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';


const ShippingScreen = () => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  
  const [shippingData, setShippingData] = useState({
    country: "",
    postalCode: "",
    city: "",
    address: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingData({ ...shippingData, [name]: value });
  };


  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   navigate('/payment');
  // };

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
          {/* <input type="text" placeholder="Ingresa el pais" required/> */}
          <input type="text" placeholder="Ingresa el país" name="country" value={shippingData.country} onChange={handleChange} required/>
          <input type="text" placeholder="Ingresa tu código postal" name="postalCode" value={shippingData.postalCode} onChange={handleChange} required/>
          <input type="text" placeholder="Ingresa la ciudad" name="city" value={shippingData.city} onChange={handleChange} required />
          <input type="text" placeholder="Ingresa la dirección" name="address" value={shippingData.address} onChange={handleChange} required />
          {/* <input type="text" placeholder="Ingresa tu codigo postal" required />
          <input type="text" placeholder="Ingresa la ciudad" required />
          <input type="text" placeholder="Ingresa la direccion" required /> */}
          <button type="submit">Continuar</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
