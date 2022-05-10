class Person {
    constructor (nombre,altura,peso,colorPelo,yearOfBirth,hobbies){
        this.nombre = nombre;        
        this.altura = altura;
        this.peso = peso;
        this.colorPelo = colorPelo;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
            }
calcularImc(peso,altura){
let resultadoImc = (this.peso / (this.altura * this.altura)) * 10000
console.log(resultadoImc)
}

calcularEdad(yearOfBirth){
let anyo = new Date().getFullYear();
let resultadoYoB = anyo - this.yearOfBirth; 
console.log(resultadoYoB)
}
// si lo conviertes a una función para concatenar la variable nueva a través de un parámetro ya que no conocemos ninguna manera de darle un valor global a la variable desde este punto
// printAll(persona){
//     let print = Object.keys(persona1)
//     print.forEach((valor) => { console.log(valor + " - " + persona1[valor]
//     );})

printAll()  {
       
   console.log("Nombre" + " - " + this.nombre + " | " + " Edad "  + " - " + this.edad  + " | " +"Altura" + " - " + this.altura + " | " +
   "Peso" + " - " + this.peso + " | " + " ColorPelo "  + " - " + this.colorPelo  + " | " + "YearOfBirth" + " - " + this.yearOfBirth + " | " + "Hobbies" + " - " + this.hobbies);
}
printHobbies(hobbies){
    console.log(this.hobbies);

}
}

module.exports.Person = Person;
