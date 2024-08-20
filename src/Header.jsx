import { useState } from "react";
import Productos from "./Productos";
import Logo from "./Logo";
import Cuerpo from "./Cuerpo";
import MenuLateral from "./MenuLateral";

function Header() {
  const [buscar, setBuscar] = useState("");

  const filtrarProductos = Productos.filter((x) =>
    x.categoria.toLowerCase().includes(buscar.toLowerCase())
  );

  const filtrado = (e) => setBuscar(e.target.value);

  return (
    <>
      <header className="header">
        <Logo />
        <div className="container-busqueda">
          <input
            className="inputBuscar"
            type="text"
            placeholder="Buscar por categoria..."
            value={buscar}
            onChange={filtrado}
          />
          <img className="imgbuscar" src="/img/busqueda.png" alt="busqueda" />
        </div>
      </header>
      <>
        <MenuLateral />
        <Cuerpo props={filtrarProductos} />
      </>
    </>
  );
}

export default Header;
