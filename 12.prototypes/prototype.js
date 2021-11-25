function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}

// Prototype

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}

Person.prototype.email = 'email@email.com'


var person1 = new Person("uma", "mahesh")
console.log(person1)
//person1.__proto__.email = "uma@ef.com"

console.log(person1.getFullName())

var person2 = new Person("Scott", "Desatnick")
console.log(person2)


console.log(person2.getFullName())

var person3 = new Person("Adam", "Colson")
console.log(person3)


console.log(person3.getFullName())

var person4 = new Person("Tuan", "Bui")
console.log(person4)


console.log(person4.getFullName())