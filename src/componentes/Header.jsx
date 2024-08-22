import { useState } from "react";
import Productos from "../Productos";
import Logo from "./Logo";
import Cuerpo from "./Cuerpo";
import { IoSearchCircleSharp } from "react-icons/io5";
import { Carrito } from "./Carrito";


function Header() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const [buscar, setBuscar] = useState("");

  const filtrarProductos = Productos.filter((x) =>
    x.categoria.toLowerCase().includes(buscar.toLowerCase())
  );

  const filtrado = (e) => setBuscar(e.target.value);

  return (
    <>
      <header className="header" id="productos">
        <Logo />
        <div className="container-busqueda">
          <input
            className="inputBuscar"
            type="text"
            placeholder="Buscar por categoria..."
            value={buscar}
            onChange={filtrado}
          />
          <IoSearchCircleSharp className="icon-lupa" />
        </div>
        <Carrito
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </header>
      <>
        <Cuerpo
          productos={filtrarProductos}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </>
    </>
  );
}

export default Header;
