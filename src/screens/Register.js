import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import Header from "./../components/Header";
import { registerRequest } from "../api/auth.js";

const Register = () => {
  window.scrollTo(0, 0);

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const history = useHistory();

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
      // Llama a la función registerRequest en lugar de axios.post
      const response = await registerRequest(formData);

      if (response.status === 200) {
        alert('Usuario creado correctamente');
        load();
      }
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  function load() {
    history.push("/HomeDasboard");
  }

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nombre"
            id="nombre"
            value={formData.nombre}
            required
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
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
