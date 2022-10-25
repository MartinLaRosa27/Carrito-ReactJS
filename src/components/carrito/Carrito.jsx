import React from "react";
import { DetalleCompra } from "./DetalleCompra";
import { ProductosMarcados } from "./ProductosMarcados";

export const Carrito = () => {
  return (
    <div id="Carrito">
      <ProductosMarcados />
      <DetalleCompra/>
    </div>
  );
};
