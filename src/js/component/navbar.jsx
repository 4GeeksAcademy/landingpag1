import React from "react";
const Navbar = () => {
return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark  p-3">
  <div className="container-fluid ">
    <a className="navbar-brand text-light" href="#"> Start Bootstrap</a>
    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto " >
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Link</a>
        </li>
        <li className="nav-item text-light">
          <a className="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>








)
}

export default Navbar;