import { useState } from "react";
import Productos from "../Productos";
import Logo from "./Logo";
import Cuerpo from "./Cuerpo";
import { IoSearchCircleSharp } from "react-icons/io5";
import { Carrito } from "./Carrito";


function Header() {
  const [verProductos, setVerProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const [conteoProductos, setConteoProductos] = useState(0);

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
          verProductos={verProductos}
          setVerProductos={setVerProductos}
          total={total}
          setTotal={setTotal}
          conteoProductos={conteoProductos}
          setConteoProductos={setConteoProductos}
        />
      </header>
      <>
        <Cuerpo
          productos={filtrarProductos}
          verProductos={verProductos}
          setVerProductos={setVerProductos}
          total={total}
          setTotal={setTotal}
          conteoProductos={conteoProductos}
          setConteoProductos={setConteoProductos}
        />
      </>
    </>
  );
}

export default Header;
