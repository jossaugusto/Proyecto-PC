const redes = [
  "/img/redes/whatsapp.png",
  "/img/redes/twitter.png",
  "/img/redes/facebook.png",
  "/img/redes/instagram.png",
];

const rd = redes.map((elemento, index) => (
  <img className="img-rd" src={elemento} alt={elemento} key={index} />
));

function Redes() {
  return <section className="container-rd">{rd}</section>;
}

export default Redes;
