/*
Cortocircuito OR:
  Cuando el valor de la izquierda en la expresión siempre pueda validar a true,
  es el valor que se carga por defecto
Cortocircuito AND:
  Cuando el valor de la izquierda en la expresión siempre pueda validar a false,
  es el valor que se carga por defecto
*/

function Saludar (nombre) {
    nombre = nombre || 'Quién eres?....',  // Operador cortocircuito
    console.log(`Hola ${nombre}`)
}
Saludar('Marlon');
Saludar();



function NuevoSaludo (nombre) {
    nombre = nombre && 'Quién eres?....',  // Operador cortocircuito
    console.log(`Hola ${nombre}`)
}
NuevoSaludo('Marlon');
NuevoSaludo(); // Se envía undefined, por lo tanto renderiza undefined
NuevoSaludo(0);
