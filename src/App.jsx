import "./App.css";
import "./Formulario.css";
import "./Pie.css";
import Inicio from "./Inicio";
import EquiposT from "./EquiposT";
import Formulario from "./Formulario";

function App() {
  return (
    <div className="containerPag">
      <Inicio />
      <EquiposT />
      <Formulario />
    </div>
  );
}

export default App;
