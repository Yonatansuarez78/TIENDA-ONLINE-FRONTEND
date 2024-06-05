import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
          {/* Top Header */}
          <div className="Announcement ">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 d-flex align-items-center display-none">
                          <p>Colombia</p>
                          <strong className='text-white'>ONLINE STORE.COM</strong>
                      </div>
                      <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
                          <Link to="https://www.facebook.com" target='_blank'>
                              <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link to="https://www.instagram.com" target='_blank'>
                              <i className="fab fa-instagram"></i>
                          </Link>
                          <Link to="https://co.linkedin.com" target='_blank'>
                              <i className="fab fa-linkedin-in"></i>
                          </Link>
                          <Link to="https://www.youtube.com" target='_blank'>
                              <i className="fab fa-youtube"></i>
                          </Link>
                          <Link to="https://www.whatsapp.com/?lang=es_LA" target='_blank'>
                              <i className="fab fa-whatsapp"></i>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar
