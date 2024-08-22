function Cuerpo({
  productos = [],
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) {
  const onAddProducts = (product) => {
    const productoExistente = allProducts.find(
      (item) => item.id === product.id);

    if (productoExistente) {
      const productsActualizado = allProducts.map((item) =>
        item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setAllProducts(productsActualizado);
    } else {
      setAllProducts([...allProducts, { ...product, cantidad: 1 }]);
    }
    setTotal(total + product.precio);
    setCountProducts(countProducts + 1);
  };

  const MostrarProductos = productos.map((producto) => (
    <article className="container-producto" key={producto.id}>
      <img
        className="imgProducto"
        src={producto.imagen}
        alt={producto.nombre}
      />
      <strong>{producto.nombre}</strong>
      <hr />
      <p className="descripcion-productos">{producto.descripcion}</p>
      <div className="precio-añadir">
      <span className="precio-productos">${producto.precio}.00</span>
      <button className="añadir" onClick={() => onAddProducts(producto)}>Añadir al carrito</button>
      </div>
    </article>
  ));

  return <main className="main-productos">{MostrarProductos}</main>;
}

export default Cuerpo;
