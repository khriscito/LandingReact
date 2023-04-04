import React from "react";

const Navbar = () => {
  return (
<div>

    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark p-2" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Start Boostrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white container-fluid justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a className="nav-link text-white" href="#">About</a>
        <a className="nav-link text-white" href="#">Services</a>
        <a className="nav-link text-white" href="#">Contact</a>
        </div>
    </div>
  </div>
  
  </nav>
  
</div>
)
};

export default Navbar;
