class Person {
public name:string;
public age:number;
private address:string;

    constructor (name:string, age:number,address:string){
        this.name = name;
        this.age = age;   
        this.address = address;
               
    }
    public printName():string{
        return this.name
    }
    public yearOfBirth(currentYear:number):number{
        return  currentYear - this.age;        
       
    }
    public setAddress(address:string){
       this.address = address;
    }
    public getAddress():string{
        return this.address;
    }
}
let person1 = new Person("Manoli",18,"Calle de La Piruleta nº 1")

console.log(person1.printName());
console.log(person1.yearOfBirth(2022));
console.log(person1.getAddress());
person1.setAddress("Calle de la chocolatina nº2");
console.log(person1.getAddress());




