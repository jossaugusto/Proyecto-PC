import Logo from "./Logo";
import { useState } from "react";

const infoDia = [
  { dia: "Domingo", textoDia: "Buen día para estar en la familia" },
  { dia: "Lunes", textoDia: "A nadie le gusta el Lunes" },
  {
    dia: "Martes",
    textoDia: "Un día para perfecto para tunear tu estilo de vida",
  },
  { dia: "Miércoles", textoDia: "Vaya día de M..." },
  { dia: "Jueves", textoDia: "Día de amigos 🍻" },
  { dia: "Viernes", textoDia: "Hoy se sale " },
  { dia: "Sábado", textoDia: "Que siga la juerga" },
];

let f = new Date();
let dia = infoDia[f.getDay()];

function Inicio() {
  const [opacity, setOpacity] = useState(1);

  const cambiar = () => {
    setOpacity(0);

    setTimeout(() => {
      setOpacity(1);
    }, 2000);
  };
  return (
    <main className="main-inicio" id="inicio">
      <div
        className="contenido-inicio"
        style={{ opacity: `${opacity}`, transition: "opacity 1s" }}
      >
        <Logo />
        <h2 className="dia">Hoy {dia.dia}</h2>
        <p className="textoDia">{dia.textoDia}</p>
        <a href="#productos" className="button-inicio" type="button" onClick={cambiar}>
          Ir a Productos
        </a>
      </div>
    </main>
  );
}

export default Inicio;
