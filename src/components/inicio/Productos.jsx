import React, { useEffect } from "react";
import { UseProducto } from "../../hook/UseProducto";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GoAlert } from "react-icons/go";

export const Productos = () => {
  // --------------------------------------------------------------- //
  const { tragos, obtenerTragos, agregarCarrito } = UseProducto();

  // --------------------------------------------------------------- //
  useEffect(() => {
    obtenerTragos();
  }, []);

  // --------------------------------------------------------------- //
  const handleClick = (trago) => {
    agregarCarrito(trago);
  };

  // --------------------------------------------------------------- //
  return (
    <div id="Productos" className="container">
      {!tragos ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <GoAlert /> No se encontraron resultados similares al elemento buscado{" "}
          <GoAlert />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        <>
          <h1>Lista de tragos</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {tragos &&
              tragos.map((trago) => {
                return (
                  <div className="col" key={trago.idDrink}>
                    <div className="card h-100">
                      <img
                        src={trago.strDrinkThumb}
                        className="card-img-top"
                        alt="..."
                      ></img>
                      <div className="card-body">
                        <h5 className="card-title">{trago.strDrink}</h5>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => handleClick(trago)}
                          >
                            <BsFillCartCheckFill /> $1.000,00
                          </button>
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};
