import React, { Component } from "react";
import Productos from "./Productos";

class Busqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: Productos.map((x) => (
        <article>
          <img src={x.imagen} alt={x.nombre} />
          <h4>{x.nombre}</h4>
          <h4>{x.precio}</h4>
          <h4>{x.descripcion}</h4>
        </article>
      )),
    };
  }

  Busqueda = (e) => {
    let filtro = Productos.filter((x) =>
      x.categoria
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    this.setState({
      lista: filtro,
    });
  };

  renderLista = () => {
    return this.state.lista.map((x) => (
      <article key={x.nombre}>
        <img src={x.imagen} alt={x.nombre} />
        <h4>{x.nombre}</h4>
        <h4>{x.precio}</h4>
        <h4>{x.descripcion}</h4>
      </article>
    ));
  };

  render() {
    return (
      <>
        <div className="container-busqueda">
          <input
            className="inputBuscar"
            name="buscar"
            placeholder="Buscar por nombre"
            onChange={this.Busqueda}
          />
          <img className="imgbuscar" src="/img/busqueda.png" alt="busqueda" />
        </div>
      </>
    );
  }
}

export default Busqueda;
