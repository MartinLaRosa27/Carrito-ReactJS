import { useContext } from "react";
import ProductoContext from "../context/ProductoProvider";

export const UseProducto = () => {
  return useContext(ProductoContext);
};
