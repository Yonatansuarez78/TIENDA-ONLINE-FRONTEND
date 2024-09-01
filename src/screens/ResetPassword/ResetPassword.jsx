import React, { useState } from 'react';
import axios from '../../api/axios';
import Header from '../../components/Header'
import { useForm } from 'react-hook-form';
import { Link, useLocation } from "react-router-dom";

const ResetPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Extraer el token de la URL
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const token = query.get('token');

    const onSubmit = async () => {
        setLoading(true);
        setError('');
        setMessage('');
        try {
            const response = await axios.post('/reset-password', {
                token,
                newPassword
            });
            setMessage(response.data.message);
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setError(err.response.data.message || 'Error en el restablecimiento de contraseña.');
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
                <h2>Restablecer tu contraseña</h2>
                <form className="Login col-md-8 col-lg-4 col-11" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="password"
                        placeholder="Nueva contraseña"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Enviando...' : 'Restablecer contraseña'}
                    </button>

                    {message && <p className='text-success'>{message}</p>}
                    {error && <p className='text-danger'>{error}</p>}

                    <p>
                        <Link to={"/login"}>Ir al login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
