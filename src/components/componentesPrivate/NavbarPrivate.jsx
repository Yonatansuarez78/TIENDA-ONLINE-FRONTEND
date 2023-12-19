import React from 'react'
import { Link } from 'react-router-dom'
import "../../style/componentsPrivate/navbarPrivate.css"
import { useAuth } from '../../context/AuthContext'

function NavbarPrivate() {
    const { logout, user } = useAuth();
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg" style={{ background: "#eaeaea" }}>
                    <div className="container-fluid">
                        <Link to="/" className='ms-2'>
                            <img alt="logo" src="/images/logo.png" style={{width: '80px'}} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-4" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ">
                                    <Link className="nav-link active " aria-current="page" to="/HomeProducts">Home products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="#">Precios top</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="#">Nuevo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="#">Lo mas comprado</Link>
                                </li>
                            </ul>
                            <p className='m-1'>{user.username}</p>
                                <div className="flex-shrink-0 dropdown custom-dropdown">
                                    <Link href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                                    </Link>
                                    <ul className="dropdown-menu text-small shadow dropdown-menu-end">
                                        <li><Link to="/profile" className="dropdown-item">Perfil</Link></li>
                                        <li><Link to="/pedidos" className="dropdown-item">Mis pedidos</Link></li>
                                        <li><Link to="/cupones" className="dropdown-item">Cupones</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/" onClick={logout}>Cerrar sesión</Link></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default NavbarPrivate

