"use strict";
exports.__esModule = true;
var vector_1 = require("./vector");
var vector1 = new vector_1.Vector(5, 100);
var v1 = new vector_1.Vector(5, 20);
var v2 = new vector_1.Vector(5, 30);
vector1.print();
// el elements se nos va modificando con cada llamada a método que hacemos sobre el objeto (no encuentro una manera distinta de hacerlo) asi que si llamamos a
//todos los métodos en sucesión el valor de elements se nos irá modificando en cada una y siendo el que se usa para las siguientes.
console.log(vector1.subs(v1));
console.log(vector1.mult(v1));
console.log(vector1.multNumber(2));
