import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-dark text-secondary px-4 py-1 text-center">
      <div className="py-3">
        <h1 className="display-5 fw-bold text-white">Welcome</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
           Your entrancing experience is our goal!
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/" className="btn btn-outline-info btn-lg px-2 me-sm-3 fw-bold">
              Home
            </Link>
            <Link to="/products" className="btn btn-outline-info btn-lg px-2 me-sm-3 fw-bold">
              Product
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
