import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";


import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import TermAndConditions from './TermAndConditions'

import { Modal, Button } from 'react-bootstrap';

import '../style/pages/register.css'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signup, isAuthenticated, errors: registerErrors } = useAuth()
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false);
  
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated])

  const onSubmit = handleSubmit(async (values) => {
    signup(values)
    console.log(values)
  })

  useEffect(() => {
    if (isAuthenticated) navigate('/homeproducts')
  }, [isAuthenticated])





  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {registerErrors.map((error, i) => (<div className='bg-danger-subtle text-black font-bold text-center m-2' key={i}>{error}</div>))}
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={onSubmit}>
          <input type="text" placeholder="nombre" {...register("username", { required: true })} />
          {errors.username && (<p className='text-danger' style={{ fontSize: '13px' }}>Nombre de usuario es requerido</p>)}

          <input type="email" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && (<p className='text-danger' style={{ fontSize: '13px' }}>Correo electronico es requerido</p>)}

          <input type="password" placeholder="password" {...register("password", { required: true })} />
          {errors.password && (<p className='text-danger' style={{ fontSize: '13px' }}>Contraseña es requerida</p>)}

          <div className="form-check d-flex justify-content-center mb-5 mt-4">
            <div className="">
              <input className="form-check-input checkbox" type="checkbox" id="form2Example3c"/>
              <label className="form-check-label mt-4 ms-3"> <Link onClick={handleShow} className="text-like-link">Aceptar Términos y Condiciones</Link></label>
            </div>

            {/* <input type="file" {...register("imageUrl ", { required: true })} /> */}
  
            <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal modal-dialog-scrollable">
              <Modal.Header closeButton>
                <Modal.Title>Términos y Condiciones</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p><TermAndConditions /></p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Aceptar
                </Button>
              </Modal.Footer>
            </Modal>
            </div>


          <button type="submit">Registrate</button>
          <p>
            <Link to={"/login"}>Ya tienes cuenta? Inicia sesión</Link>
          </p>
        </form>
      </div>
    </>
  );
};


export default Register;
