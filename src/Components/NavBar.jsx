import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link href="" className="navbar-bran fw-bolder">E-store</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="NavbarCollapse">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/products'} className="nav-link">Products</Link>
                </li>
                {/* <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li> */}
                </ul>

           </div>
      </nav>

    </div>
  )
}

export default NavBar
