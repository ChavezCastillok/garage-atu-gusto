import { writable } from "svelte/store";

class Product {
  constructor(
    name,
    price,
    state,
    cant = 1,
    description = "",
    tags = [],
    photo = "#",
    url_to_fb = "#"
  ) {
    this.name = name;
    this.price = price;
    this.state = state;
    this.cant = cant;
    this.description = description;
    this.tags = tags;
    this.photo = photo;
    this.url_to_fb = url_to_fb;
  }
  toString() {
    return `- ${this.name}, ${this.description}, ${this.price}`;
  }
}

class book {
  constructor(title, author, price, tags = [], photo = "#", cant = 1) {
    this.name = title;
    this.author = author;
    this.price = price;
    this.cant = cant;
    this.tags = tags;
    this.photo = photo;
  }

  toString() {
    return `${this.name} ${this.author != "" ? "de " + this.author : ""}`;
  }
}

let listProducts = [
  new Product(
    "Plantas de sabila (Aloe Vera) sueltas",
    10000,
    "nuevo",
    20,
    "Plantas y pencas de sabila, pequeñas medianas y grandes",
    ["huerto", "sabila"],
    ""
  ),
  new Product(
    "Plantas de lirios (rojos) sueltas",
    8000,
    "nuevo",
    20,
    "Plantas y semillas de lirios rojos y rojos con blanco",
    ["huerto", "sabila"],
    ""
  ),
  new Product(
    "Planta de Jade en matero",
    15000,
    "nuevo",
    9,
    "Arbol o planta Jade en matero",
    ["huerto", "jade"],
    ""
  ),
  new Product(
    "Prendas de bisuteria",
    3000,
    "nuevo",
    19,
    "Disponibles collares, zarcillos y pulseras de bisuteria a precios super baratos",
    ["hogar", "prendas", "bisuteria"],
    ""
  ),
  new Product(
    "Semillas de lirios rojos",
    2000,
    "nuevo",
    20,
    "Semillas de lirios rojos puros y rojo con blanco.",
    ["huerto", "lirios", "jardin", "flores"],
    ""
  ),
  new Product(
    "Bombillo LED 12W",
    4000,
    "nuevo",
    8,
    "Bombillo LED de bajo consumo C&M",
    ["hogar", "bombillo"],
    ""
  ),
  ,
  new Product(
    "Bombillo LED 15W",
    4500,
    "nuevo",
    8,
    "Bombillo LED de bajo consumo C&M",
    ["hogar", "bombillo"],
    ""
  ),
  new Product(
    "Retrovisor derecho aveo 2004-2010",
    53000,
    "usado",
    1,
    "",
    ["repuesto-car", "chevrolet"],
    ""
  ),
  new Product(
    "Esquinero izquierdo NPR",
    88000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "chevrolet"],
    ""
  ),
  new Product(
    "Base y aspa de electroventilador Optra",
    175000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "chevrolet"],
    ""
  ),
  new Product(
    "Retrovisor electrico derecho Blazer 1995-98",
    140000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "chevrolet"],
    ""
  ),
  new Product(
    "Polea de bomba de direccion hidraulica Corsa",
    53000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "chevrolet"],
    ""
  ),
  new Product(
    "Terminal de dirección derecha Corsa",
    35000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "chevrolet"],
    ""
  ),
  new Product(
    "Cojinete freno de discos Corsa",
    70000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "chevrolet"],
    ""
  ),
  new Product(
    "Base de motor energy",
    35000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "renault"],
    ""
  ),
  new Product(
    "Tijera derecha Logan",
    140000,
    "usado",
    1,
    "",
    ["repuesto-car", "renault"],
    ""
  ),
  new Product(
    "Base de amortiguador + rolinera Logan",
    53000,
    "nuevo",
    2,
    "",
    ["repuesto-car", "renault"],
    ""
  ),
  new Product(
    "Muñon Logan",
    25000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "renault"],
    ""
  ),
  new Product(
    "Bomba de direccion Clio",
    210000,
    "usado",
    1,
    "",
    ["repuesto-car", "renault"],
    ""
  ),
  new Product(
    "Meseta derecha 19 energy",
    70000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "renault"],
    ""
  ),
  new Product(
    "Retrovisor manual izquierdo Bronco 1992-98",
    123000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "ford"],
    ""
  ),
  new Product(
    "Polea de correa de tiempo Arauca",
    35000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "Chery"],
    ""
  ),
  new Product(
    "Kit correa de tiempo para Fiat Palio, Siena",
    130000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "Fiat"],
    ""
  ),
  new Product(
    "Arepa de amortiguador Delt Aveo",
    15000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "Chevrolet"],
    ""
  ),
  new Product(
    "Tensor correa de tiempo Arauca",
    45000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "Chery"],
    ""
  ),
  new Product(
    "Muñon Volkswagen Gol",
    30000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "Volkswagen"],
    ""
  ),
  new Product(
    "Rolinera delt Fiat Tempra 2.0, Palio, Siena, Idea",
    40000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "Fiat"],
    ""
  ),
  new Product(
    "Rodamiento de amortiguador delt Aveo",
    10000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "Chevrolet"],
    ""
  ),
  new Product(
    "Filtro de aire para Hyundai Accent",
    10000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "Hyundai"],
    ""
  ),
  new Product(
    "Estopera cigueñal motor zetec Ford ecosport, fiesta",
    100000,
    "nuevo",
    1,
    "",
    ["repuesto-car", "Ford"],
    ""
  ),
  new Product(
    "Juego de cubiertos",
    70000,
    "nuevo",
    1,
    "",
    ["hogar", "cocina"],
    "var/hogar/cubiertos.jpg"
  ),
  new Product(
    "Cuchillo electrico",
    35000,
    "nuevo",
    1,
    "",
    ["hogar", "cocina"],
    "../var/hogar/cuchillo.jpg"
  ),
  new Product(
    "Plancha a vapor",
    50000,
    "nuevo",
    1,
    "",
    ["hogar"],
    "var/hogar/plancha.jpg"
  ),
  new Product(
    "Tostadora Sandwichera",
    50000,
    "nuevo",
    1,
    "",
    ["hogar", "cocina"],
    "var/hogar/tostadora.jpg"
  ),
  new Product(
    "Juego de 4 copas",
    50000,
    "nuevo",
    2,
    "",
    ["hogar"],
    "var/hogar/copas.jpg"
  ),
  new Product(
    "Bateria de ollas Magefesa (10 piezas)",
    980000,
    "nuevo",
    1,
    "",
    ["hogar", "cocina"],
    "var/hogar/ollas-magefesa.png"
  ),
  new Product(
    "Resistencia de cocina electrica",
    10000,
    "nuevo",
    8,
    "",
    ["hogar", "cocina"],
    "../media/destacados/rce-gatg.png"
  ),
  new Product(
    "Balanza electronica de cocina",
    17000,
    "nuevo",
    8,
    "Capacidad maxima 7kg",
    ["hogar", "cocina"],
    "../media/destacados/balanza.png"
  ),
];

let listBooks = [
  new book(
    "Etica para amador",
    "Fernando Savater",
    5000,
    ["libros", "Filosofia"],
    ""
  ),
  new book(
    "Figuraciones mias",
    "Fernando Savater",
    5000,
    ["libros", "Filosofia"],
    ""
  ),
  new book("PNL para la salud", "", 5000, ["libros", "psicologia"], ""),
  new book(
    "El poder del pensamiento flexible",
    "Walter Riso",
    7000,
    ["libros", "psicologia"],
    ""
  ),
  new book("Psico Neuro Inmunologia", "", 9000, ["libros", "psicologia"], ""),
  new book(
    "El cerebro y la inteligencia emocional",
    "Daniel Goleman",
    10000,
    ["libros", "psicologia"],
    ""
  ),
  new book("FOCUS", "Daniel Goleman", 10000, ["libros", "psicologia"], ""),
  new book("El espiritu Piaget", "", 7000, ["libros", "psicologia"], ""),
  new book(
    "matematica para primer año",
    "",
    9000,
    ["libros", "matematica"],
    ""
  ),
  new book("Geometria Analitica", "", 10000, ["libros", "matematica"], ""),
  new book(
    "Cipriano Castro, politica y personalidad",
    "",
    5000,
    ["libros", "politica e historia"],
    ""
  ),
  new book(
    "Seguridad, defensa y democracia",
    "",
    0,
    ["libros", "politica e historia"],
    ""
  ),
  new book(
    "El caballero de la armadura oxidada",
    "",
    5000,
    ["libros", "ficcion"],
    ""
  ),
  new book("El corazon de las tinieblas", "", 8000, ["libros", "ficcion"], ""),
  new book("Maria", "", 8000, ["libros", "ficcion"], ""),
  new book(
    "Romulo Gallegos, cuentos completos",
    "Romulo Gallegos",
    7000,
    ["libros", "ficcion"],
    ""
  ),
  new book("Metafisica", "Conny Mendez", 5000, ["libros"], ""),
  new book("Soy Cuaima ¿y qué?", "", 5000, ["libros"], ""),
  new book("La vaca", "Camilo Cruz", 5000, ["libros"], ""),
  new book("Mi cocina ligera a la manera venezolana", "", 5000, ["libros"], ""),
  new book(
    "Dietas Reglas para una alimentación sana",
    "",
    5000,
    ["libros"],
    ""
  ),
  new book("Deliciosas sopas y cremas", "", 5000, ["libros"], ""),
  new book("Salud y bienestar, pack de 5", "", 20000, ["libros"], ""),
];

export const products = writable(listProducts);
export const books = writable(listBooks);
