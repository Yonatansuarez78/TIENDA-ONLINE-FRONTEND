import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/homeComponents/Rating";
import products from "../data/Products";
import Header from "./../components/Header";
import { useNavigate } from 'react-router-dom';

const SingleProduct = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  // Buscar el producto en base al ID proporcionado en la ruta
  const selectedProduct = products.find((p) => p._id === id);

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

  function onclick(){
    const data = selectedProduct  
    navigate('/shipping');
  }


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
                      <p> <Link to={`/products/${selectedProduct._id}`}>
                          {selectedProduct.name}
                        </Link></p>

                      <Rating
                        value={selectedProduct.rating}
                        text={`${selectedProduct.numReviews} reviews`}/>
                      <h3>${selectedProduct.price}</h3>
                    </div>
                  </div>
                  <button className="name-button text-white ml-auto" style={{ background: "#1cb803"}} onClick={onclick}>Comprar</button>

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
