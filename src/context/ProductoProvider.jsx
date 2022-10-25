import { createContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const ProductoContext = createContext();

export const ProductoProvider = (props) => {
  // --------------------------------------------------------------- //
  const [tragos, setTragos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  // --------------------------------------------------------------- //
  const obtenerTragos = async () => {
    try {
      await axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
        )
        .then((res) => {
          setTragos(res.data.drinks);
        });
    } catch (e) {
      setTragos([]);
    }
  };

  // --------------------------------------------------------------- //
  const obtenerTragosConParametro = async (categoria) => {
    try {
      await axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`
        )
        .then((res) => {
          setTragos(res.data.drinks);
        });
    } catch (e) {
      setTragos([]);
    }
  };

  // --------------------------------------------------------------- //
  const agregarCarrito = (trago) => {
    setCarrito((carrito) => [...carrito, trago]);
    Swal.fire("Trago agregado al carrito");
  };

  // --------------------------------------------------------------- //
  const eliminarTragoCarrito = (trago) => {
    const aux = carrito.filter((value) => {
      return value !== trago;
    });
    setCarrito(aux);
    Swal.fire("Trago eliminado del carrito");
  };

  // --------------------------------------------------------------- //
  const vaciarCarrito = () => {
    setCarrito([]);
    Swal.fire("Compra Cancelada");
  };

  // --------------------------------------------------------------- //
  const comprarCarrito = () => {
    setCarrito([]);
    Swal.fire("Compra Realizada");
  };

  // --------------------------------------------------------------- //
  return (
    <ProductoContext.Provider
      value={{
        tragos,
        carrito,
        obtenerTragos,
        obtenerTragosConParametro,
        agregarCarrito,
        eliminarTragoCarrito,
        vaciarCarrito,
        comprarCarrito,
      }}
    >
      {props.children}
    </ProductoContext.Provider>
  );
};

export default ProductoContext;
