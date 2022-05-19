// Programa una función que cuente el número de caracteres de una cadena de texto. 
//      Ejemplo: miFuncion("Hola Mundo") devolverá 10.

let str = 'Hola Mundo';
function miFuncion(str) {
    return str.length;
}

console.log(`La cadena "${str}" tiene una longitud de ${miFuncion(str)} caracteres`);
