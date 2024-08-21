function Cuerpo({ props = [] }) {
  const producto = props.map((x, index) => (
    <article className="container-producto" key={index}>
      <img className="imgProducto" src={x.imagen} alt={x.nombre} />
      <strong>{x.nombre}</strong>
      <hr />
      <p className="descripcion-productos">{x.descripcion}</p>
      <span className="precio-productos">{x.precio}</span>
    </article>
  ));

  return <main className="main-productos">
    {producto}
    </main>;
}

export default Cuerpo;
