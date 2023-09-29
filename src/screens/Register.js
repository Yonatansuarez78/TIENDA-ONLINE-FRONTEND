import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./../components/Header";
import { registerRequest } from "../api/auth.js";
import { useAuth } from "../context/AuthContext"; // Importa el contexto

const Register = () => {
  window.scrollTo(0, 0);

  const { updateUser } = useAuth(); // Obtiene la función de actualización del usuario desde el contexto

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await registerRequest(formData);

      if (response.status === 200) {
        alert("Usuario creado correctamente");
        updateUser(response.data); // Actualiza el usuario en el contexto
        load();
      }
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  function load() {
    history.push("/HomeDashboard");
  }

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={handleSubmit}
        >
          {/* Resto del formulario */}
        </form>
      </div>
    </>
  );
};

export default Register;
