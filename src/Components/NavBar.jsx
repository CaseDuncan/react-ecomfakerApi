import React from 'react'

function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="" className="navbar-bran fw-bolder">E-store</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="NavbarCollapse">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Products</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contact</a>
                </li>

            </ul>
        </div>
      </nav>

    </div>
  )
}

export default NavBar
