import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Rating from "../components/homeComponents/Rating";
import products from "../data/Products";
import Header from "./../components/Header";
import { useAuth } from "../context/AuthContext"; 

const SingleProduct = () => {
  const [countInStock, setCountInStock] = useState(1); // state de productos en countInStock
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); //state desactivar button
  const [shippingData, setShippingData] = useState(); // estado para manejar el pedido


  const { user } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  // Buscar el producto en base al ID proporcionado en la ruta
  const selectedProduct = products.find((p) => p._id === id);

  useEffect(() => {
    if (selectedProduct.countInStock == 0)
    setIsButtonDisabled(true);
  }, []);


  // Verificar si el producto fue encontrado
  if (!selectedProduct) {
    return (
      <>
        <Header />
        <div className="container single-product">
          <p>Error: No se encontró el producto con el ID proporcionado.</p>
        </div>
      </>
    );
  }

  // Agrega el método de pago al objeto shippingData
  const updatedShippingData = {
    ...shippingData,
    countInStock: countInStock,
    selectedProduct: selectedProduct._id
  };



  const handleClick = () => {
    if (!user) {    // Verificar si el usuario está autenticado
      navigate('/login'); // Redirigir al usuario a la página de inicio de sesión
      return null;
    } else {
      navigate('/shipping', { state: { shippingData: updatedShippingData} });
    }
  };

  // Crea una lista de opciones basada en countInStock
  const options = selectedProduct
    ? Array.from({ length: selectedProduct.countInStock }, (_, i) => i + 1)
    : [];

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setShippingData({ ...shippingData });
    setCountInStock(value);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {/* Mostrar solo el producto seleccionado */}
                <div className="shop col-lg-12 border-product">
                  <div className="">
                    <div className="shopBack">
                      <img src={selectedProduct.image} alt={selectedProduct.name} />
                    </div>

                    <div className="shoptext">
                      <p>
                        <Link to={`/products/${selectedProduct._id}`}>
                          {selectedProduct.name}
                        </Link>
                      </p>
                      <p>countInStock {selectedProduct.countInStock}</p>

                      <Rating
                        value={selectedProduct.rating}
                        text={`${selectedProduct.numReviews} reviews`} />

                      <h3>${selectedProduct.price}</h3>
                    </div>
                  </div>
                  <select
                    id="quantity"
                    value={countInStock}
                    onChange={handleChange}
                    className="quantity-select"
                    disabled={!selectedProduct}
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <button
                    className="name-button text-white ml-auto"
                    style={{
                      background: isButtonDisabled ? "#CCCCCC" : "#1cb803", // Cambiar color del botón si está deshabilitado
                      opacity: isButtonDisabled ? 0.5 : 1 // Cambiar opacidad del botón si está deshabilitado
                    }}
                    onClick={handleClick}
                    disabled={isButtonDisabled} >
                    Comprar
                  </button>
                </div>
                {/* Fin de la sección del producto seleccionado */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
