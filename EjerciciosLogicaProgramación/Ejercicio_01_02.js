// Programa una función que te devuelva el texto recortado según el número de caracteres indicados
//      Ejemplo: miFuncion("Hola Mundo", 4) devolverá "Hola".


let str = 'Hola Mundo';
let cantidad = 4;
function miFuncion(str, cantidad) {
    return str.slice(0, cantidad);
}

console.log(`Los primeros ${cantidad} caracteres de la cadena "${str}" son ${miFuncion(str, 4)}`);
