import React, { useState } from "react";
import { UseProducto } from "../../hook/UseProducto";

export const Buscador = () => {
  // --------------------------------------------------------------- //
  const [categoria, setCategoria] = useState("");

  // --------------------------------------------------------------- //
  const { obtenerTragosConParametro } = UseProducto();

  // --------------------------------------------------------------- //
  const handleSubmit = (e) => {
    e.preventDefault();
    obtenerTragosConParametro(categoria);
  };

  // --------------------------------------------------------------- //
  return (
    <div className="container" id="Buscador">
      <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Ordinary Drink"
          aria-label="Search"
          onChange={(e) => {
            setCategoria(e.target.value);
          }}
          pattern="[a-zA-Z/]{4,50}"
          required
        ></input>
        <button className="btn btn-outline-success" type="submit">
          Categoria de Trago
        </button>
      </form>
    </div>
  );
};
