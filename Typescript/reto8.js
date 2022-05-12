var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = elementsRandom(n, k);
        function elementsRandom(n, k) {
            var resultado = [];
            for (var i = 0; i < n; i++) {
                resultado[i] = Math.floor(Math.random() * k);
            }
            return resultado;
        }
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = this.elements[i] + v1.elements[i];
        }
        return this;
    };
    Vector.prototype.subs = function (v1) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = this.elements[i] - v1.elements[i];
        }
        return this;
    };
    Vector.prototype.mult = function (v1) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = this.elements[i] * v1.elements[i];
        }
        return this;
    };
    Vector.prototype.multNumber = function (n) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i] = this.elements[i] * n;
        }
        return this;
    };
    return Vector;
}());
var vector1 = new Vector(5, 100);
var v1 = new Vector(5, 20);
var v2 = new Vector(5, 30);
vector1.print();
// el elements se nos va modificando con cada llamada a método que hacemos sobre el objeto (no encuentro una manera distinta de hacerlo)
console.log(vector1.add(v1));
console.log(vector1.subs(v1));
console.log(vector1.mult(v1));
console.log(vector1.multNumber(2));
