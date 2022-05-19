import {PI, PI2} from './Constantes.js';

import Multi,  {operaciones as op} from './Operaciones.js'

console.log('Es importante que al invocar este archivo en HTML se coloque el type module para poder usar el import');

console.log(PI)
console.log(PI2)

console.log(op.restar(3, 4))
console.log(op.sumar(3, 4))
console.log(Multi(2, 13))  // se exportó como defaul el producto y se colocó este alias