"use strict";

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

const otherProducts = [
  new Product(
    "Bombillo LED 12W C&M",
    4000,
    "nuevo",
    8,
    "Bombillo LED de bajo consumo C&M",
    ["hogar", "bombillo"],
    ""
  ),
  new Product(
    "Bombillo LED 15W C&M",
    4500,
    "nuevo",
    8,
    "Bombillo LED de bajo consumo C&M",
    ["hogar", "bombillo"],
    ""
  ),
  new Product(
    "Termostato de cocina electrica 220V 10A",
    10000,
    "nuevo",
    7,
    "termostato regulador de cocina electrica.",
    ["hogar", "cocina"],
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
    "Resistencia de cocina electrica 1000W 110v",
    10000,
    "nuevo",
    8,
    "Resistencia (hornilla) de cocina electrica 1000W 110V, tambien disponible al mayor.",
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

const plantasHuerto = [
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
    "Semillas de lirios rojos",
    2000,
    "nuevo",
    20,
    "Semillas de lirios rojos puros y rojo con blanco.",
    ["huerto", "lirios", "jardin", "flores"],
    ""
  ),
];

const repuestosCar = [
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
];

export const listProducts = [
  ...otherProducts,
  ...plantasHuerto,
  ...repuestosCar,
];
