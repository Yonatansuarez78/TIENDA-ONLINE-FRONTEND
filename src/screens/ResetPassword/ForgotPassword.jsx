import React, { useState } from 'react';
import Header from '../../components/Header';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from '../../api/axios';

function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (data) => {
        setLoading(true);
        setError('');
        setMessage('');
        try {
            const response = await axios.post('/forgot', {
                email: data.email
            });
            setMessage(response.data.message);
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setError(err.response.data.message);
            } else {
                setError('Hubo un error al enviar la solicitud. Intenta nuevamente.');
            }
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />
            <div className="container d-flex flex-column justify-content-center align-items-center login-center">
                <h2>Ingresa tu correo electronico</h2>
                <form className="Login col-md-8 col-lg-4 col-11" onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="Email" {...register("email", { required: true })} />
                    {errors.email && (<p className='text-danger' style={{ fontSize: '13px' }}>Correo electrónico es requerido</p>)}

                    <button type="submit" disabled={loading}>
                        {loading ? 'Enviando...' : 'Restablecer contraseña'}
                    </button>

                    {message && (<p className='text-success'>{message}</p>)}
                    {error && (<p className='text-danger'>{error}</p>)}

                    <p>
                        <Link to={"/login"}>Ir al login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
