import Productos from "./Productos";

const card = Productos.map((elemento, index) => (
  <article className="Producto">
    <img className="imgProducto" src={elemento.imagen} alt={elemento.nombre} key={index} />
    <strong>{elemento.nombre}</strong>
    <hr/>
    <p className="descripcion">{elemento.descripcion}</p>
    <span className="precio">{elemento.precio}</span>
  </article>
));

function Cuerpo() {
  return <main className="main">{card}</main>;
}

export default Cuerpo;
