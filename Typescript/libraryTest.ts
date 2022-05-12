import {Book} from "./book"
import {Library} from "./library"

let bookA = new Book("Los hijos de Húrin", 336,"2342145-BC261243" , "J.R.R. Tolkien", "Minotauro");
let bookB = new Book("Los hijos de Túrin", 336,"2342145-BC261243" , "J.R.R. Rododendro", "Minotauro");

let library1 = new Library ([bookA ,bookB], "Villa del Pedregal", "Antonio Pasiego");

console.log(library1.getAuthor("J.R.R. Tolkien"))
