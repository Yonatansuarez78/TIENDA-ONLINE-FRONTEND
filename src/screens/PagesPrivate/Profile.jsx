import React from 'react'
import { useForm } from 'react-hook-form'

function Profile() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  

  return (
    <div>
      <section className="container">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-10 col-xl-9">
              <div className="card text-black" style={{ borderRadius: '25px' }}>
                <div className="row justify-content-center">
                  <p className="text-center h2 fw-bold mb-4 mx-1 mx-md-4 mt-4">ACTUALIZA TUS DATOS</p>
                  <form className="mx-1 mx-md-4" onSubmit={onSubmit}>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label for="exampleInputEmail1" class="form-label">Nombre de usuario</label>
                            <input type="text" className="form-control" {...register("username", { required: true })} />
                            {errors.username && (<p className='text-danger' style={{ fontSize: '13px' }}>Nombre de usuario es requerido</p>)}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
                            <input type="email" className="form-control" {...register("email", { required: true })} />
                            {errors.email && (<p className='text-danger' style={{ fontSize: '13px' }}>Correo electronico es requerido</p>)}
                          </div>
                        </div>
                      </div>


                      <div className='col-md-6'>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label for="exampleInputEmail1" class="form-label">Contraseña</label>
                            <input type="password" className="form-control" {...register("password", { required: true })} />
                            {errors.password && (<p className='text-danger' style={{ fontSize: '13px' }}>Contraseña es requerida</p>)}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label for="exampleInputEmail1" class="form-label">Confirmar contraseña</label>
                            <input type="password" className="form-control" {...register("password", { required: true })} />
                            {errors.password && (<p className='text-danger' style={{ fontSize: '13px' }}>Contraseña es requerida</p>)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg">Actualizar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
