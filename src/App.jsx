import "./App.css";
import "./css/Pie.css";
import Inicio from "./componentes/Inicio";
import EquiposT from "./componentes/EquiposT";
import Login from "./componentes/Login";
function App() {
  return (
    <div className="containerPag">
      <Inicio />
      <Login/>
      <EquiposT />
    </div>  
  );
}

export default App;
