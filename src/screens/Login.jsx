import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signin, errors: signinErrors, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    signin(data)
  })

  useEffect(() => {
    if (isAuthenticated) navigate('/homeproducts')
  }, [isAuthenticated])

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {signinErrors.map((error, i) => (<div className='bg-danger-subtle text-black font-bold text-center m-2' key={i}>{error}</div>))}
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={onSubmit}>
          <input type="email" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && (<p className='text-danger' style={{ fontSize: '13px' }}>Correo electronico es requerido</p>)}

          <input type="password" placeholder="password" {...register("password", { required: true })} />
          {errors.password && (<p className='text-danger' style={{ fontSize: '13px' }}>Contraseña es requerida</p>)}
          
          <button type="submit">Inicia sesión</button>
          <p>
            <Link to={"/Register"}>Crear cuenta</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
