function Cuerpo({ props = [] }) {
  const producto = props.map((x, index) => (
    <article className="Producto" key={index}>
      <img className="imgProducto" src={x.imagen} alt={x.nombre} />
      <strong>{x.nombre}</strong>
      <hr />
      <p className="descripcion">{x.descripcion}</p>
      <span className="precio">{x.precio}</span>
    </article>
  ));

  return <main className="main">
    {producto}
    </main>;
}

export default Cuerpo;
