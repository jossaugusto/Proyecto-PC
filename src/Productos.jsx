const Productos = [
  {
    id: 1,
    cantidad: 1,
    nombre: "LAPTOP GAMER ASUS FX507ZC4-HN087W",
    precio: 3199,
    categoria: "laptop",
    imagen: "/img/laptop/laptop1.jpg",
    descripcion:
      "Todo lo que necesitas para ganar, gracias a su pantalla de alta velocidad, sistema térmico mejorado y batería de alta duración le permite resistir todos los desafíos del día a día",
  },
  {
    id: 2,
    cantidad: 1,
    nombre: "LAPTOP ASUS VIVOBOOK 16 INTEL CORE I7-12700H",
    precio: 2499,
    categoria: "laptop",
    imagen: "/img/laptop/laptop2.jpg",
    descripcion:
      "Pantalla de 15.6 pulgadas con una resolución sorprendente Full HD (1920 x 1080), con un fino marco. Además, posee una memoria RAM DDR4 de 16GB y 512GB SSD de capacidad para brindarte mayor productividad",
  },
  {
    id: 3,
    cantidad: 1,
    nombre: "LAPTOP LENOVO IDEAPAD SLIM 3I INTEL CORE I5",
    precio: 1899,
    categoria: "laptop",
    imagen: "/img/laptop/laptop3.jpg",
    descripcion:
      "Equipado con procesadores Intel® Core™ de hasta 13.a generación. La configuración te permite optimizar el rendimiento, prolongar la duración de la batería y mantener el sistema más ventilado",
  },
  {
    id:4,
    nombre: "LAPTOP HP 15-DY5000LA INTEL CORE I5",
    precio: 1799,
    categoria: "laptop",
    imagen: "/img/laptop/laptop4.jpg",
    descripcion:
      "Larga duración en un diseño delgado y portable con pantalla de micro borde. Portátil HP 15-dy5000la (6K2C8LA) Diseñada para tu productividad y entretenimiento desde cualquier lugar",
  },
  {
    id:5,
    nombre: "LAPTOP HP 15-FB2002LA AMD RYZEN 5",
    precio: 3099,
    categoria: "laptop",
    imagen: "/img/laptop/laptop5.jpg",
    descripcion:
      "Procesador AMD Ryzen™ HS, tarjeta gráfica NVIDIA® GeForce RTX™ 3050, Wi-Fi 6E, SSD ultrarrápido y funciones necesarias para largas horas de streaming",
  },
  {
    id:6,
    nombre: "Computadora AMD A12",
    precio: 1299,
    categoria: "computadora",
    imagen: "/img/pc/computadora1.jpg",
    descripcion:
      "AMD A12 8870 3.7GHz/4.2GHz, 4 núcleos, 4 hilos, 4MB caché L2 ,AM4  65W, Disco Sólido SSD M.2 500GB, Memoria RAM de 16GB DDR4, Mainboard Chipset A320, Monitor de 19'' HD",
  },
  {
    id:7,
    nombre: "Computadora Intel Core I5",
    precio: 1699,
    categoria: "computadora",
    imagen: "/img/pc/computadora2.jpg",
    descripcion:
      "Intel Core i5 6th 3.6GHz, 4 núcleos, 4 hilos, 6MB SmartCaché, LGA1151, 65W, Disco Sólido SSD M.2 1TB NVMe, Memoria RAM 16GB DDR4, Tarjeta Madre H110",
  },
  {
    id:8,
    nombre: "Computadora Core I3 10105 10th Gen",
    precio: 1799,
    categoria: "computadora",
    imagen: "/img/pc/computadora3.jpg",
    descripcion:
      "Intel Core i3 10105 3.7GHz/4.4GHz, 4 núcleos, 8 hilos, 6MB SmartCaché, LGA1200, 65W, Disco Sólido SSD M.2 1TB NVMe, Memoria RAM 16GB DDR4 2666MHz, Tarjeta Madre H510",
  },
  {
    id:9,
    nombre: "PC Gamer Haku White Ryzen 5 4600G",
    precio: 1899,
    categoria: "computadora",
    imagen: "/img/pc/computadora4.jpg",
    descripcion:
      "Intel Core i3 10105 3.7GHz/4.4GHz, 4 núcleos, 8 hilos, 6MB SmartCaché, LGA1200, 65W, Disco Sólido SSD M.2 1TB NVMe, Memoria RAM 16GB DDR4 2666MHz, Tarjeta Madre H510",
  },
  {
    id:10,
    nombre: "PC Gamer Falkor Red Plus Ryzen 7 5800X",
    precio: 5099,
    categoria: "computadora",
    imagen: "/img/pc/computadora5.jpg",
    descripcion:
      "AMD Ryzen 7 5800X 3.8GHz/4.7GHz, 8 núcleos, 16 hilos, 32MB caché L3, AM4, 105W, Disco Sólido SSD M.2 1TB NVMe PCIe, Memoria RAM 32GB DDR4 3200MHz, Tarjeta Madre B550, Tarjeta de Video RTX3060 12GB",
  },
  {
    id:11,
    nombre: "Auricular Logitech H111",
    precio: 49,
    categoria: "auricular",
    imagen: "/img/auricular/audifono1.jpg",
    descripcion:
      "Interfaz : Mini Jack 3.5 mm, Rango de Sensibilidad : 100 dB, Impedancia : 32 Ohmios, Cable : 1.8 m, Tipo de Almohadilla : Espuma",
  },
  {
    id:12,
    nombre: "Auricular Micronics Platinum MIC H800K USB",
    precio: 59,
    categoria: "auricular",
    imagen: "/img/auricular/audifono2.jpg",
    descripcion:
      "Conector Jack en USB, Sonido Estéreo, Micrófono Flexible, Almohadilla Textil Para Mayor Comodidad, Banda Reforzada Ajustable Para Mayor Duración, Control de Volumen y Micrófono en Orejera",
  },
  {
    id:13,
    nombre: "Auricular Gamer Halion S2 Dragon",
    precio: 69,
    categoria: "auricular",
    imagen: "/img/auricular/audifono3.jpg",
    descripcion:
      "Auricular Estéreo Gamer con Micrófono, Almohadillas Acolchadas, Acabado Brillante + Detalles de Metal, Diseño Ergonómico, Banda Interior de Metal, Ajustable",
  },
  {
    id:14,
    nombre: "Auricular MICRONICS Lúdico HG801R",
    precio: 89,
    categoria: "auricular",
    imagen: "/img/auricular/audifono4.jpg",
    descripcion:
      "Sonido con vibracion, Auricular Gamer con Micrófono, Almohadillas Protectoras de Cuero, Iluminación LED, Vincha protectora de cuero",
  },
  {
    id:15,
    nombre: "Teclado Gamer USB Havit KB876L-SP",
    precio: 89,
    categoria: "teclado",
    imagen: "/img/teclado/teclado1.jpg",
    descripcion:
      "Modelo KB876L, Cantidad de teclas 105, Color blanco, Conexion alambrico USB",
  },
  {
    id:16,
    nombre: "Teclado Gamer Mecanico Halion Stellar",
    precio: 169,
    categoria: "teclado",
    imagen: "/img/teclado/teclado2.jpg",
    descripcion:
      "104 teclas, Conector USB, Longitud de cable 1.5mt, Teclado Mecanico",
  },
  {
    id:17,
    nombre: "Teclado con Mouse Logitech MK540",
    precio: 119,
    categoria: "teclado",
    imagen: "/img/teclado/teclado3.jpg",
    descripcion:
      "Tipo de teclas: Cóncavas, Unidad de sensor: Óptico, Cantidad de botones: Tres (izquierda, derecha y central con desplazamiento)",
  },
  {
    id:18,
    nombre: "Teclado ANTRYX GC-3100 WHITE",
    precio: 219,
    categoria: "teclado",
    imagen: "/img/teclado/teclado4.jpg",
    descripcion:
      "Interruptor content rojo – AGC-3100WRE-XX, tiempos de vida de la llaves: 50 000 000 (50 Millones), llaves: 105, longitud de cable: 1,8M",
  },
  {
    id:19,
    nombre: "Mouse Gamer Teros TE-1210G RGB Gaming",
    precio: 69,
    categoria: "mouse",
    imagen: "/img/mouse/mouse1.jpg",
    descripcion:
      "Tipo de sensor Óptico, Resolución del sensor DPI desde 800 hasta 6400, Voltaje: 5V ± 10%, Energía consumida: 50 mA (máximo)",
  },
  {
    id:20,
    nombre: "Mouse Gamer Logitech G502 Hero",
    precio: "PEN: 229.00",
    categoria: "mouse",
    imagen: "/img/mouse/mouse3.jpg",
    descripcion:
      "Resolución de 100-25600 dpi, Tasa de USB 1000 Hz (1ms), Microprocesador: 32-bit ARM, Cantidad de botones 11",
  },
  {
    id:21,
    nombre: "Mouse Acer Nitro NMW120 Negro Y Rojo",
    precio: "PEN: 69.00",
    categoria: "mouse",
    imagen: "/img/mouse/mouse4.jpg",
    descripcion:
      "8 botones programables que permite ajustar tus preferencias, Tecnología LED azul para funcionamiento sobre superficies, RGB: Con 4 opciones de color",
  },
];

export default Productos;
