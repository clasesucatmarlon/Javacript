// Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter
//      Ejemplo: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']


let str = 'Hola que tal';
let caracter = ' ';
function miFuncion(str, caracter) {
    return str.split(caracter);
}

console.log(`Los palabras del string "${str}" separadas por el caracter "${caracter}" son:`);
console.log(`${miFuncion(str, caracter)}`);
