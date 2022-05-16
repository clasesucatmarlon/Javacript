/*
TABLE:
***********************************************************
0. OBTENER LOS MÉTODOS DISPONIBLES
1. OBTENER VALOR ABSOLUTO
2. REDONDEAR NÚMERO AL ENTERO SUPERIOR
3. REDONDEAR NÚMERO AL ENTERO INFERIOR
4. REDONDEAR NÚMERO MATEMÁTICAMENTE
5. RAÍZ CUADRADA
6. CUADRADO DE UN NÚMERO
7. DETERMINAR SI UN NÚMERO ES POSITIVO (1), NEGATIVO (-1) O CERO (0)
8. HALLAR NÚMERO ALEATORIO [0, 1]
*/


// 0. OBTENER LOS MÉTODOS DISPONIBLES
// ***************************************************************
console.table(Math);

// 1. OBTENER VALOR ABSOLUTO
// ***************************************************************
console.log(Math.abs(-7.8));

// 2. REDONDEAR NÚMERO AL ENTERO SUPERIOR
// ***************************************************************
console.log(Math.ceil(7.01));
console.log(Math.ceil(7.51));

// 3. REDONDEAR NÚMERO AL ENTERO INFERIOR
// ***************************************************************
console.log(Math.floor(7.01));
console.log(Math.floor(7.51));

// 4. REDONDEAR NÚMERO MATEMÁTICAMENTE
// ***************************************************************
console.log(Math.round(7.49));
console.log(Math.round(7.50));

// 5. RAÍZ CUADRADA
// ***************************************************************
console.log(Math.sqrt(81));

// 6. CUADRADO DE UN NÚMERO
// ***************************************************************
console.log(Math.pow(5, 3));

// 7. DETERMINAR SI UN NÚMERO ES POSITIVO (1), NEGATIVO (-1) O CERO (0)
// ***************************************************************
console.log(Math.sign(-6));  // -1
console.log(Math.sign(6));   //  1
console.log(Math.sign(0));  //   0

// 8. HALLAR NÚMERO ALEATORIO [0, 1]
// ***************************************************************
console.log(Math.random());
console.log(Math.round(Math.random()*1000));  // random(0, 1000)
