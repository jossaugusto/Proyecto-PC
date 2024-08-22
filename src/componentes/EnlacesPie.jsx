const Enlaces = [
  { name: "Inicio", url: "#inicio" },
  { name: "Iniciar Sesion", url: "#login" },
  { name: "Productos", url: "#productos" },
];

const tituloPie = "INNOV8";
const ancor = Enlaces.map((x,index) => <a key={index} className="ancor-pie" href={x.url}>{x.name}</a>);

function EnlacesPie() {
  return (
    <section className="cont-enlaces">
      <h1  className="tit-enlaces">{tituloPie}</h1>
      <hr/>
      {ancor}
    </section>
  );
}

export default EnlacesPie;
