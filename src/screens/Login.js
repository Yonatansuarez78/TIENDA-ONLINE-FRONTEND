import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./../components/Header";
import { loginRequest } from "../api/auth.js"; // Asegúrate de ajustar la ruta correcta

const Login = () => {
  window.scrollTo(0, 0);

  // Estado local para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  // Manejador de cambios para actualizar el estado cuando se ingresan datos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejador para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginRequest(formData);

      if (response.status === 200) {
        alert('Login correctamente');
        load();
      }
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  // Función "load" para realizar acciones después de iniciar sesión
  const load = () => {
    history.push("/HomeDasboard");
    console.log("Acciones después de iniciar sesión");
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
          <p>
            <Link to={"/register"}>Create Account</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
