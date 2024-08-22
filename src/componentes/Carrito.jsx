import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export const Carrito = ({
  verProductos,
  setVerProductos,
  conteoProductos,
  setConteoProductos,
  total,
  setTotal,

}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = verProductos.filter((item) => item.id !== product.id);
    setTotal(total - product.precio * product.cantidad);
    setConteoProductos(conteoProductos - product.cantidad);
    setVerProductos(results);
  };

  const onCleanCart = () => {
    setVerProductos([]);
    setTotal(0);
    setConteoProductos(0);
  };

  return (
    <div className="contenedor-icono">
      <div onClick={() => setActive(!active)}>
        <div className="container-contador">
          <span className="contador-productos">{conteoProductos}</span>
        </div>
        <FaShoppingCart className="icono-carrito" />
      </div>

      <div className={`container-carrito ${active ? "" : "ocultar-carrito"}`}>
        {verProductos.length ? (
          <>
            <section >
              {verProductos.map((product) => (
                <div className="carrito-productos" key={product.id}>
                  <div className="info-carrito">
                    <span className="cantidad-producto-carrito">
                      {product.cantidad}
                    </span>
                    <p className="titulo-producto-carrito">{product.nombre}</p>
                    <span className="precio-producto-carrito">
                      ${product.precio}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="borrar-producto"
                    onClick={() => onDeleteProduct(product)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              ))}
            </section>

            <div className="carrito-total">
              <h3>Total:</h3>
              <span className="total-pagar">${total}</span>
            </div>

            <button className="boton-limpiar" onClick={onCleanCart}>
              Vaciar Carrito
            </button>
          </>
        ) : (
          <p className="carrito-vacio">El carrito está vacío</p>
        )}
      </div>
    </div>
  );
};
