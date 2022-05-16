let string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat hic, distinctio, tempore quisquam enim ducimus nemo numquam ad est fugit sed quod natus culpa quasi iste minima aspernatur impedit. Similique tempora necessitatibus reprehenderit dolor consectetur doloribus ratione accusantium sed, corrupti eligendi, officia dolore nobis aliquam maxime nemo cumque lorem voluptatum officiis vero! Dolorum lorem itaque corrupti ut voluptates sed unde lorem excepturi?'


// MÉTODO CREANDO LA INSTANCIA DE RegExp
// ************************************************************
let expReg1 = new RegExp('lorem', 'i');
console.log(expReg1.test(string));  // Verifica que exista la palabra dentro del string
console.log(expReg1.exec(string));  // Devuelve un array y dependiemndo de las flag retorna la última coincidencia


// MÉTODO USANDO SLASH
// ************************************************************
let expReg2 = /lorem/ig;
console.log(expReg2.test(string));  // Verifica que exista la palabra dentro del string
console.log(expReg2.exec(string));  // Devuelve un array y dependiemndo de las flag retorna la última coincidencia

// MÉTODO USANDO SLASH
// ************************************************************
let expReg3 = /lorem*/i;
console.log(expReg3.test(string));  // Verifica que exista la palabra dentro del string
console.log(expReg3.exec(string));  // Devuelve un array y dependiemndo de las flag retorna la última coincidencia