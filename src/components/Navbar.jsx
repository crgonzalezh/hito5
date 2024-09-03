import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 28000; 
  const token = false; 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Pizzería Mamma Mia</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={token ? "/login" : "/register"}>
                {token ? "Logout" : "Login"}
              </Link>
            </li>
          </ul>
          <Link className="btn btn-primary" to="/cart">🛒 Total: ${total.toLocaleString()}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
