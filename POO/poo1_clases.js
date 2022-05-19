// Métodos agregados al prototipo de la función constructora
class Animal {
  constructor (nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  sonido() {
    console.log('Soy animal y hago ruido');
  }
  saludar () {
    console.log('Hola me llamo ', this.nombre);
  }
}

// Herencia
class Perro extends Animal {
  constructor (nombre, genero, tamanio) {
    super(nombre, genero)
    this.tamanio = tamanio;
  }
  sonido () {
    console.log('Soy perro y ladro');
  }
  ladrar() {
    console.log('Yo ladro mucho......, hago guau guau')
  }
}

let snoppy = new Perro('Snoppy', 'Macho', 'mediano');
let lolaBunny = new Animal('Lola', 'Hembra');
console.log(lolaBunny)
console.log(lolaBunny.saludar());
console.log(lolaBunny.sonido());

console.log(snoppy)
console.log(snoppy.saludar());
console.log(snoppy.sonido());  // Sobrescrito en Perro
console.log(snoppy.ladrar()); // Nuevo método de Perro