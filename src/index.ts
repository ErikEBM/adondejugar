import {Producto} from "./producto.js";

import {matematica} from "./mate.js";



var verdura = new Producto("tomate", 5.5)
 
console.log(verdura);

console.log(matematica.suma(3, 4));
console.log(matematica.division(8, 4));
console.log(matematica.resta(5, 4));
console.log(matematica.residuo(3, 4));
console.log(matematica.producto(3, 4));