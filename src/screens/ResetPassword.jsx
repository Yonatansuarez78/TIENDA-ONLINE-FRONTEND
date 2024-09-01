import React from 'react'
import Header from '../components/Header'

import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'


function ResetPassword() {
    const { register, formState: { errors } } = useForm()

    function onSubmit(){
        alert('hola')
    }


  return (
    <div>
    <Header/>

          <div className="container d-flex flex-column justify-content-center align-items-center login-center">
              <form className="Login col-md-8 col-lg-4 col-11" onSubmit={onSubmit}>
                  <input type="email" placeholder="Email" {...register("email", { required: true })} />
                  {errors.email && (<p className='text-danger' style={{ fontSize: '13px' }}>Correo electronico es requerido</p>)}

                  <button type="submit">Restablecer contraseña</button>
                  <p>
                      <Link to={"/login"}>Ir al login</Link>
                  </p>
              </form>
          </div>
      
    </div>
  )
}

export default ResetPassword
