import React from 'react'

import { Link, NavLink } from "react-router-dom";
import coloredLogo from '../images/logo-color.png'
// import coloredLogo1 from '../images/hero-e-commerece.svg'
// import coloredLogo2 from '../images/hero-wordpress.avif'
// import coloredLogo3 from '../images/menu-webapp.svg'
// import coloredlogo4 from '../images/hero-mobile-app-1.svg'

const Header = () => {
  return (
    <div>
      <header className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
          

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbrand-center d-lg-block  mx-auto navbar-brand" to="/custom-website-development/">
              <img className="img-fluid" src={coloredLogo} alt="img" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <ul className="navbar-nav ms-auto ">
                <li className="nav-item nav-link1 custom-nav-item">
                  <NavLink className="nav-link  custom-nav-link" to="/custom-website-development">Home</NavLink>
                </li>
                <li className="nav-item nav-link1 custom-nav-item">
                  <NavLink className="nav-link  custom-nav-link" to="/OurWork">Our Work</NavLink>
                </li>
                <li className="nav-item nav-link1 custom-nav-item dropdown">
                  <a className="nav-link custom-nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                  <div className="dropdown-menu mega-menu">
                    <li><a class="dropdown-item" href="/WebApp"> <img className="img-fluid" src={coloredLogo3} alt="logo" /><div className="watch">
                      <p>Web app development</p>
                      <span>Custom business solutions to digital products</span>
                    </div>
                    </a></li>
                    <li><a class="dropdown-item" href="/ECommerce"> <img className="img-fluid" src={coloredLogo1} alt="logo" /><div className="watch">
                      <p>E-commerce design and development</p>
                      <span>online store to custom intigartion</span>
                    </div></a></li>
                    <li><a class="dropdown-item" href="/Wordpress"> <img className="img-fluid" src={coloredLogo2} alt="logo" />
                    <div className="watch">
                      <p>wordpress customization</p>
                      <span>Our expertise lies in WordPress customization</span>
                    </div></a></li>
                    <li><a class="dropdown-item" href="/MobApp"> <img className="img-fluid" src={coloredlogo4} alt="logo" /> <div className="watch">
                      <p>Mobile Applications</p>
                      <span>Our focus is on creating outstanding mobile applications</span>
                    </div> </a></li>
                  </div>
                </li>
                <li className="nav-item nav-link1 custom-nav-item">
                  <NavLink className="nav-link  custom-nav-link" to="/blog">Blog</NavLink>
                </li>
              </ul> */}
              <ul className="navbar-nav misson ms-auto ">
                <li className="nav-item custom-nav-item">
                  <NavLink className="nav-link custom-nav-link" to="tel:510-474-0516">
                 <a className='going-new' href="tel:510-474-0516">510-474-0516</a> 
                  </NavLink>
                </li>
                <li className="nav-item btn1 custom-nav-item">
                  <a className="nav-link custom-nav-link"  data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                  Get started</a>
                </li>


              </ul>

            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
