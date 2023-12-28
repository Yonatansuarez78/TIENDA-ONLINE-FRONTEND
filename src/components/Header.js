import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <Navbar />
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  <div className="btn-group">
                    <button type="button" className="name-button dropdown-toggle"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      {/* <Link className="dropdown-item" to="/profile">
                        PERFIL
                      </Link> */}
                      <Link className="dropdown-item" to="/login">LOGIN </Link>
                    </div>
                  </div>
                  <Link to="/cart" className="cart-mobile-icon"> <i className="fas fa-shopping-bag"></i> <span className="badge">4</span> </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group">
                    <input type="search" className="form-control rounded search" placeholder="Search" />
                    <button type="submit" className="search-button">Buscar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="/images/logo.png" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form className="input-group">
                  <input type="search" className="form-control rounded search" placeholder="Search" />
                  <button type="submit" className="search-button">Buscar </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <div class="btn-group" role="group">
                    <button type="button" class="name-button dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Hi, Admin
                    </button>
                    <ul class="dropdown-menu">
                      <li><Link class="dropdown-item" to="/login">Inicia sesion</Link></li>
                    </ul>
                  </div>
                </div>
                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">4</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
