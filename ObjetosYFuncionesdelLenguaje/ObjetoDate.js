/*
TABLE:
***********************************************************
0. OBTENER LA FECHA ACTUAL
1. OBTENER MES ACTUAL (Enero=0, Febrero=1 .....)
2. OBTENER DIA SEMANA ACTUAL (Domingo=0, Lunes=1 .....)
3. OBTENER AÑO ACTUAL
4. OBTENER HORA ACTUAL
5. OBTENER MINUTOS ACTUALES
6. OBTENER MINUTOS ACTUALES
7. EXTRAER SOLO LA FECHA / SIN LA HORA
8. EXTRAER FECHA y HORA LOCAL
9. EXTRAER FECHA LOCAL
10. EXTRAER HORA LOCAL
*/


// 0. OBTENER LA FECHA ACTUAL
// ***************************************************************
console.log(Date());
let fecha = new Date();
console.log(fecha);

// 1. OBTENER MES ACTUAL (Enero=0, Febrero=1 .....)
// ***************************************************************
let mes = fecha.getMonth();
console.log(mes);

// 2. OBTENER DIA SEMANA ACTUAL (Domingo=0, Lunes=1 .....)
// ***************************************************************
let dia = fecha.getDay();
console.log(dia);

// 3. OBTENER AÑO ACTUAL
// ***************************************************************
let anio = fecha.getFullYear();
console.log(anio);

// 4. OBTENER HORA ACTUAL
// ***************************************************************
let hora = fecha.getHours();
console.log(hora);

// 5. OBTENER MINUTOS ACTUALES
// ***************************************************************
let min = fecha.getMinutes();
console.log(min);

// 6. OBTENER MINUTOS ACTUALES
// ***************************************************************
let seg = fecha.getSeconds();
console.log(seg);

// 7. EXTRAER SOLO LA FECHA / SIN LA HORA
// ***************************************************************
let fechaSola = fecha.toDateString();
console.log(fechaSola);

// 8. EXTRAER FECHA y HORA LOCAL
// ***************************************************************
let fechaHoraLocal = fecha.toLocaleString();
console.log(fechaHoraLocal);

// 9. EXTRAER FECHA LOCAL
// ***************************************************************
let fechaLocal = fecha.toLocaleDateString();
console.log(fechaLocal);

// 10. EXTRAER HORA LOCAL
// ***************************************************************
let horaLocal = fecha.toLocaleTimeString();
console.log(horaLocal);