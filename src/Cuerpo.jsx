import Productos from "./Productos";

const card = Productos.map((elemento, index) => (
  <article>
    <img src={elemento.imagen} alt={elemento.nombre} key={index} />
    <strong>{elemento.nombre}</strong>
    <span>{elemento.precio}</span>
  </article>
));

function Cuerpo() {
  return <main>{card}</main>;
}

export default Cuerpo;
