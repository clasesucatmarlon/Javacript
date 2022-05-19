// Métodos en la clase
// function Animal (nombre, genero) {
//   this.nombre = nombre;
//   this.genero = genero;
//   this.sonido = function () {
//     console.log('Soy animal y hago ruido');
//   }
// }


// Métodos agregados al prototipo de la función constructora
function Animal (nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}
Animal.prototype.sonido = function () {
  console.log('Soy animal y hago ruido');
}

Animal.prototype.saludar = function () {
  console.log('Hola me llamo ', this.nombre);
}

// Herencia prototípica
function Perro (nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}
Perro.prototype = new Animal; // Aquí se hace la herencia
Perro.prototype.constructor = Perro;

// Sobrescribir método del padre
Perro.prototype.sonido= function () {
  console.log('Soy perro y ladro');
}
Perro.prototype.ladrar = function() {
  console.log('Yo ladro mucho......, hago guau guau')
}

// let snoppy = new Animal('Snoppy', 'Macho');
let lolaBunny = new Animal('Lola', 'Hembra');
console.log(lolaBunny.saludar());
console.log(lolaBunny.sonido());

let snoppy = new Perro('Snoppy', 'Macho', 'mediano');
console.log(snoppy)
console.log(snoppy.saludar());
console.log(snoppy.sonido());  // Sobrescrito en Perro
console.log(snoppy.ladrar()); // Nuevo método de Perro