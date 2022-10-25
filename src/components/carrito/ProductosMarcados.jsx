import React from "react";
import { UseProducto } from "../../hook/UseProducto";
import { AiFillDelete } from "react-icons/ai";

export const ProductosMarcados = () => {
  // --------------------------------------------------------------- //
  const { carrito, eliminarTragoCarrito } = UseProducto();

  // --------------------------------------------------------------- //
  const handleClick = (trago) => {
    eliminarTragoCarrito(trago)
  };

  // --------------------------------------------------------------- //
  return (
    <div id="ProductosMarcados" className="container">
      {carrito.length === 0 ? (
        <>
          <div>
            <div className="alert alert-warning" role="alert">
              Carrito vacio, por favor, agrega algún producto al mismo
            </div>
          </div>
        </>
      ) : (
        <>
          <ul className="list-group">
            {carrito.map((producto) => {
              return (
                <li
                  class="list-group-item d-flex justify-content-between align-items-center"
                  key={producto.idDrink}
                >
                  {producto.strDrink}
                  <span class="badge bg-primary rounded-pill" onClick={() => handleClick(producto)}>
                    <AiFillDelete />
                  </span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};
