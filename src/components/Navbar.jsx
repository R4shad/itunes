import React from "react";
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar justify-content-center " >
      <div className="logo" style={{ width: '100px', height: 'auto' }}>
        <img
          src="https://logowik.com/content/uploads/images/589_itunes.jpg"
          alt="iTunes"
          className="img-fluid" 
        />
      </div>
    </div>
  );
}

export default Navbar;
