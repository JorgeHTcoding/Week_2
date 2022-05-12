var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        return this.name;
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    return Person;
}());
var person1 = new Person("Manoli", 18, "Calle de La Piruleta nº 1");
console.log(person1.printName());
console.log(person1.yearOfBirth(2022));
console.log(person1.getAddress());
person1.setAddress("Calle de la chocolatina nº2");
console.log(person1.getAddress());
