const {Contacts} = require("./contacts");
let {Person} = require("./person");

let contact2 = new Contacts;
let persona2 = new Person("Pepe",165,28,"Castaño",1981, ["gritar", " chillar"," dar voces"])


contact2.array.push(persona2);
contact2.printPersons();
