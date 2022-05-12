import {Contacts} from "./contact"
import { Person } from "./person"

let personaA = new Person("Ana",29,"San Sebastian de los Reyes");
let personaB = new Person("Manuel",34,"Coslada");
let personaC = new Person("Jorge",29,"San Pedro del Romeral");

let contact1 = new Contacts();

contact1.people.push(personaA,personaB,personaC)
console.log(contact1.people);
