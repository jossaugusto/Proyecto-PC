const redes = [
  {src:"/img/redes/whatsapp.png",url:'https://web.whatsapp.com'},
  {src:"/img/redes/twitter.png",url:'https://x.com'},
  {src:"/img/redes/facebook.png",url:'https://https://www.facebook.com'},
  {src:"/img/redes/instagram.png",url:'https://www.instagram.com'},
];

const rd = redes.map((elemento, index) => (
  <a className="enlace-redes" href={elemento.url} target="blank"><img className="img-rd" src={elemento.src

  } alt={elemento.src} key={index} /></a>
));

function Redes() {
  return <section className="container-rd">{rd}</section>;
}

export default Redes;
