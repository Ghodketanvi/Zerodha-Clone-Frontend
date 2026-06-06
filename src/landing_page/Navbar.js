import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // simple check: user is logged in if token exists
  const handleDashboardClick = (e) => {
    const token = localStorage.getItem("token");

    if (!token) {
      e.preventDefault(); // stop navigation
      alert("You must log in before accessing the dashboard.");
      return;
    }

    // if token exists, allow navigation
    window.location.href = "http://localhost:3001/";
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>

              {/* Dashboard button with login check */}
              <li className="nav-item ms-3">
                <button
                  type="button"
                  className="btn btn-primary px-3"
                  onClick={handleDashboardClick}
                >
                  Dashboard
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;