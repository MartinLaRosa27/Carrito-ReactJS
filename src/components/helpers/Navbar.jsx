import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Carrito } from "../carrito/Carrito";
import { Inicio } from "../inicio/Inicio";

export const Navbar = () => {
  return (
    <BrowserRouter>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="Navbar"
      >
        <div className="container-fluid container">
          <Link className="navbar-brand" to="/home">
            CarritoReact.js
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/carrito"
                >
                  Mis Compras
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/home" element={<Inicio />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
