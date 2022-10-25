import React from "react";
import { UseProducto } from "../../hook/UseProducto";

export const DetalleCompra = () => {
  // --------------------------------------------------------------- //
  const { carrito, vaciarCarrito, comprarCarrito } = UseProducto();

  // --------------------------------------------------------------- //
  const cancelarCompra = () => {
    vaciarCarrito();
  };

  // --------------------------------------------------------------- //
  const realizarCompra = () => {
    comprarCarrito();
  };

  // --------------------------------------------------------------- //
  return (
    <div id="DetalleCompra" className="container">
      <h3>Total: ${1000 * carrito.length}</h3>
      {carrito.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="confirmar_pago">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => realizarCompra()}
            >
              Confirmar Compra
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => cancelarCompra()}
            >
              Cancelar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};
