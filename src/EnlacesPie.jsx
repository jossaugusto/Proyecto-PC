const Enlaces = [
  { name: "Inicio", url: "#inicio" },
  { name: "Consultas", url: "#formulario" },
  { name: "Monitores G-SYNC", url: "/" },
  { name: "Gaming en la nube", url: "/" },
];

const tituloPie = "Productos";
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
