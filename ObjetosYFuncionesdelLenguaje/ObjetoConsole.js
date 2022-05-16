/*
TABLE:
***********************************************************
0. DETERMINAR OBJETOS DE LA CONSOLA
1. DETERMINAR EL TIEMPO DE EJECUCIÓN DEL CÓDIGO
2. SABER CUÁNTAS VECES SE EJECUTÓ UN BLOQUE DE CÓDIGO
3. HACER PRUEBAS CON CONSOLE
*/

console.log('Test')

// 0. DETERMINAR OBJETOS DE LA CONSOLA
// ***************************************************************
console.table(Object.entries(console));

// 1. DETERMINAR EL TIEMPO DE EJECUCIÓN DEL CÓDIGO
// ***************************************************************
console.time('Tiempo empleado');

const array = Array(1000)
for (let i = 0; i < array.length; i++) {
    array[i] = i;
}
console.timeEnd('Tiempo empleado');
console.log(array);

// 2. SABER CUÁNTAS VECES SE EJECUTÓ UN BLOQUE DE CÓDIGO
// ***************************************************************
for (let i = 0; i <= 5; i++) {
    console.count('Código for...')
    console.log(i);
}

// 3. HACER PRUEBAS CON CONSOLE
// ***************************************************************
console.clear()
let x = 10;
y = 2
testXY = 'Se espera que x siempre sea menor que y';
console.assert(x < y, { x, x, testXY})
