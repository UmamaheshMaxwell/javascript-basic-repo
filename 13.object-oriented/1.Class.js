/*
    ? Class
*/
function Student(){

}

/*
    ? Instance
*/

function Person(){

}

var person1 = new Person() // person1 is an instance
var person2 = new Person() // person2 is an instance


/*
    ? Constructor
*/

function Order(){
    console.log('Order is initiated')
}

var order1 = new Order() // Order() is called constructor

/*
    ? Property
*/

function Customer(gender){
    this.gender = gender // property
}

var customer1 = new Customer('Male')
console.log(customer1)
var customer2 = new Customer('Female')
console.log(customer2)

/*
    ? Property
*/

function Employee(){

}

Employee.prototype.sayHello = function(){
    console.log('Hello')
}

var employee = new Employee()

employee.sayHello()