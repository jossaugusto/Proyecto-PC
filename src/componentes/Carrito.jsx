import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export const Carrito = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);
    setTotal(total - product.precio * product.cantidad);
    setCountProducts(countProducts - product.cantidad);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <div className="container-icon">
      <div className="container-cart-icon" onClick={() => setActive(!active)}>
        <div className="count-products">
          <span className="contador-productos">{countProducts}</span>
        </div>
        <FaShoppingCart className="icon-cart" />
      </div>

      <div className={`container-cart-products ${active ? "" : "hidden-cart"}`}>
        {allProducts.length ? (
          <>
            <div className="row-product">
              {allProducts.map((product) => (
                <div className="cart-product" key={product.id}>
                  <div className="info-cart-product">
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
                    className="icon-close"
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
            </div>

            <div className="cart-total">
              <h3>Total:</h3>
              <span className="total-pagar">${total}</span>
            </div>

            <button className="btn-clear-all" onClick={onCleanCart}>
              Vaciar Carrito
            </button>
          </>
        ) : (
          <p className="cart-empty">El carrito está vacío</p>
        )}
      </div>
    </div>
  );
};
