import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Rating from "../components/homeComponents/Rating";
import products from "../data/Products";
import Header from "./../components/Header";

import { useAuth } from "../context/AuthContext";
import { useOrder } from '../context/OrderContext';

const SingleProduct = () => {
  const [countInStock, setCountInStock] = useState(1); // state de productos en countInStock
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); //state desactivar button

  const { user } = useAuth();
  const { setOrder } = useOrder();
  const navigate = useNavigate();
  const { id } = useParams();

  // Buscar el producto en base al ID proporcionado en la ruta
  const selectedProduct = products.find((p) => p._id === id);

  // Actualiza el estado del botón basado en countInStock
  useEffect(() => {
    if (selectedProduct) {
      setIsButtonDisabled(selectedProduct.countInStock === 0);
    }
  }, [selectedProduct]);

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

  // Maneja el clic en el botón de comprar
  const handleClick = (productId, quantity) => {
    if (!user) {    // Verificar si el usuario está autenticado
      navigate('/login'); // Redirigir al usuario a la página de inicio de sesión
      return;
    }

    // Actualiza el estado del contexto con los datos del pedido
    setOrder(prevOrder => ({
      ...prevOrder,
      productos: [...prevOrder.productos, { id_producto: productId, cantidad: quantity }],
      id_usuario: user?.id || prevOrder.id_usuario,
      nombre_usuario: user?.username || prevOrder.nombre_usuario,
      correo_electronico: user?.email || prevOrder.correo_electronico,
    }));

    // Navega a la página de dirección de envío
    navigate('/shipping');
  };

  // Crea una lista de opciones basada en countInStock
  const options = selectedProduct
    ? Array.from({ length: selectedProduct.countInStock }, (_, i) => i + 1)
    : [];

  const handleChange = (e) => {
    setCountInStock(Number(e.target.value));
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
                      <p>Count In Stock: {selectedProduct.countInStock}</p>

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
                    onClick={() => handleClick(selectedProduct._id, countInStock)}
                    disabled={isButtonDisabled}
                  >
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
