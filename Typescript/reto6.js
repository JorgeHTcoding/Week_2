"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toStringBook = function () {
        var resultado = "";
        for (var i = 0; i < this.books.length; i++) {
            resultado += "Book" + (i + 1) + "\n" + this.books[i].toString1() + "\n";
        }
        return resultado;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.getAuthor = function (author) {
        var resultadoAutor = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() === author)
                resultadoAutor.push(this.books[i]);
        }
        return resultadoAutor;
    };
    return Library;
}());
var bookA = new book_1.Book("Los hijos de Húrin", 336, "2342145-BC261243", "J.R.R. Tolkien", "Minotauro");
var bookB = new book_1.Book("Los hijos de Túrin", 336, "2342145-BC261243", "J.R.R. Rododendro", "Minotauro");
var library1 = new Library([bookA, bookB], "Villa del Pedregal", "Antonio Pasiego");
console.log(library1.getAuthor("J.R.R. Tolkien"));
