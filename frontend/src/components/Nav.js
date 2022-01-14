import React from "react";
import { Link, useHistory  } from "react-router-dom";
// import { } from "react-router-dom/cjs/react-router-dom.min"




const Nav = () => {
  const history = useHistory()
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        {" "}
        <a class="navbar-brand name" href="gosnippets.com" target="_blank">
          Bella
        </a>{" "}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {" "}
          <span class="navbar-toggler-icon"></span>{" "}
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {" "}
              <a class="nav-link active" aria-current="page"  onClick={() => {
              history.push('/')
            }}>
                Home
              </a>{" "}
            </li>
            <li class="nav-item" onClick={() => {
              history.push('/cart')
            }}
            >
              {" "}
              <a class="nav-link"  
                

              
              >
                Cart
              </a>{" "}
            </li>
            <li class="nav-item" onClick={() => {
              history.push('/shop')
            }}>
              {" "}
              <a class="nav-link" >
                Shop
              </a>{" "}
            </li>
            <li class="nav-item" onClick={() => {
              history.push('/orders')
            }}>
              {" "}
              <a class="nav-link">
                Orders
              </a>{" "}
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="#">
                Contact
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
