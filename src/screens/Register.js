import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";
import axios from "axios"; // Importar Axios

const Register = () => {
  window.scrollTo(0, 0);

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Función para manejar cambios en los campos de entrada
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Enviar los datos al backend utilizando Axios
      const response = await axios.post("http://localhost:3000/usuarios", formData);
      if(response){
        alert('usuario creado correctamente')
      } else {
        alert('ocurrio un error almomento de creacion')
      }
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <button type="submit">Register</button>
          <p>
            <Link to={"/login"}>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
