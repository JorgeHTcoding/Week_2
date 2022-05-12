import {Person} from "./person"

let persona1 = new Person("Agallas", 7 , "Villa Escondida")

console.log(persona1.printName());
console.log(persona1.yearOfBirth(2022));
console.log(persona1.getAddress());
persona1.setAddress("Villa Encontrada");
console.log(persona1.getAddress());