"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var library_1 = require("./library");
var bookA = new book_1.Book("Los hijos de Húrin", 336, "2342145-BC261243", "J.R.R. Tolkien", "Minotauro");
var bookB = new book_1.Book("Los hijos de Túrin", 336, "2342145-BC261243", "J.R.R. Rododendro", "Minotauro");
var library1 = new library_1.Library([bookA, bookB], "Villa del Pedregal", "Antonio Pasiego");
console.log(library1.getAuthor("J.R.R. Tolkien"));
