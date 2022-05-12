"use strict";
exports.__esModule = true;
exports.Vector = void 0;
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
exports.Vector = Vector;
