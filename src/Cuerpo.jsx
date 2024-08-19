import Productos from "./Productos";

const card = Productos.map((elemento) => (
  <article >
    <img className="card-img-top" src={elemento.imagen} alt={elemento.nombre} />
    <strong className="card-title">{elemento.nombre}</strong>
    <span class="btn btn-primary">{elemento.precio}</span>
  </article>
));

function Cuerpo() {
  return <main className="card">{card}</main>;
}

export default Cuerpo;
