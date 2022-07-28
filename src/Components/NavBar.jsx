import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink href="" className="navbar-bran fw-bolder">E-store</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="NavbarCollapse">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products" className="nav-link">Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </li>

            </ul>
        </div>
      </nav>

    </div>
  )
}

export default NavBar
