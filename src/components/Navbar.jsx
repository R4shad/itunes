import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar justify-content-center ">
      <div className="logo" style={{ width: "100px", height: "auto" }}>
        <img
          src="https://logowik.com/content/uploads/images/589_itunes.jpg"
          alt="iTunes"
          className="img-fluid"
        />
      </div>
    </nav>
  );
}

export default Navbar;
