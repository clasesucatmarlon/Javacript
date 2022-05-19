// Programa una función que repita un texto X veces
//      Ejemplo: miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo


let str = 'Hola mundo ';
let repeticiones = 3;
function miFuncion(str, caracter) {
    return str.repeat(repeticiones);
}

console.log(`${miFuncion(str, repeticiones)}`);
