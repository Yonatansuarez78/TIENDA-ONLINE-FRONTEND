import React from "react";
import { useAuth } from '../../context/AuthContext'


const ProfileTabs = () => {
  const { user } = useAuth();
  return (
    <>
      <form className="row  form-container">
        <div className="col-md-6">
          <div className="form">
            <label for="account-fn">NOMBRE COMPLETO</label>
            <input className="form-control" type="text" value={user.username}/>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-email">DIRECION DE CORREO ELECTRONICO</label>
            <input className="form-control" type="email" readOnly value={user.email}></input>
  
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-pass">NUEVA CONTRASEÑA</label>
            <input className="form-control" type="password" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-confirm-pass">CONFIRMA TU CONTRASEÑA</label>
            <input className="form-control" type="password" />
          </div>
        </div>
        <button type="submit">ACTULIZAR DATOS</button>
      </form>
    </>
  );
};

export default ProfileTabs;
