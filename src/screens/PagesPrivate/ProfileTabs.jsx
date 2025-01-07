import React, { useState } from "react";
import { useAuth } from '../../context/AuthContext'
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import '../../style/componentsPrivate/profileTabs.css'

const ProfileTabs = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdate = async (event) => {
    event.preventDefault();

    // Validar contraseñas
    if (password && password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const updateData = { username };
      if (password) {
        updateData.password = password;
      }

      const response = await axios.put('/updateProfile', updateData);
      console.log(response)

      if (response.status === 200) {
        createAlert('Actualización realizada exitosamente', 'success');
        setTimeout(() => { navigate('/'); }, 5000);
      } else {
        throw new Error('Error al actualizar los datos');
      }
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
      alert('Error al actualizar los datos');
    }
  };

  const createAlert = (message, type) => {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible`;
    alert.role = 'alert';
    alert.innerHTML = `${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    alertPlaceholder.appendChild(alert);
  };

  return (
    <>
      <form className="row form-container" onSubmit={handleUpdate}>
        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-fn">NOMBRE COMPLETO</label>
            <input
              className="form-control"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-email">DIRECCIÓN DE CORREO ELECTRÓNICO</label>
            <input
              className="form-control"
              type="email"
              readOnly
              value={user.email}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-pass">NUEVA CONTRASEÑA</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label htmlFor="account-confirm-pass">CONFIRMA TU CONTRASEÑA</label>
            <input
              className="form-control"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">ACTUALIZAR DATOS</button>
      </form>
      <div id="liveAlertPlaceholder"></div>
    </>
  );
};

export default ProfileTabs;
