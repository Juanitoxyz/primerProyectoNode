//Listas

const lista = [1, 2, 3];
const lista1 = new Array(4, 5, 6);
const lista2 = new Array(3);
const lista4 = [lista, lista1, lista2];

console.log(lista);
console.log(lista1);
console.log(lista2);

lista2[1] = "numero";
console.log(lista2);

console.log(lista4);


// Objetos

const movil = {
  alto: 12,
  ancho: 6,
  fondo: 0.4,
  andoid: true,
  apps: ["agenda", "whatsapp", "google"],
  capacidad: {
    ram: "6gb",
    DD: 64
  },
  color: ["blanco", "negro", "azul"],
  nuevosColores: new Array("verde", "morado"),
  "tamaño pantalla": "6 pulgadas"
}

console.log(movil.color);
console.log(movil.capacidad.ram);

movil.marca = "xiaomi";
console.log(movil.marca);
console.log(movil.nuevosColores);
console.log(movil["tamaño pantalla"]);


// Fechas   -------    libreria de apoyo Moment.js

const tiempo = new Date();
console.log(tiempo);

const tiempo_miliseg = new Date(250000);
console.log(tiempo_miliseg);

const fechas = new Date("july 22 2020");
console.log(fechas);

const fecha2 = new Date(1978, 1, 22);
console.log(fecha2);

const dia = tiempo.getDate();
console.log(dia);

const mes = tiempo.getMonth();
console.log(mes);

const anyo = tiempo.getFullYear();
const dia2 = tiempo.getTime();
console.log(dia2);


