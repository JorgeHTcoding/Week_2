let {Person} = require("./person");

let persona2 = new Person ("Pepe",32, 175, 60,"Castaño", 1990, ["dibujar" ," pasear", " leer"])


persona2.calcularImc();
persona2.calcularEdad();
persona2.printHobbies();
// de esta manera es como lo dijimos en el person.js si hicieramos un
// persona2.printAll(persona2);
persona2.printAll()