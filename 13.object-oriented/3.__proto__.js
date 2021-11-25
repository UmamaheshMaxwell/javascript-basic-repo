function Student(){
    this.name ="John"
    this.gender = "male"
}

var student1 = new Student();
console.log(Student.prototype)

console.log(student1.prototype) // undefined

console.log(student1.__proto__)

console.log(typeof Student.prototype)
console.log(typeof student1.__proto__)

console.log(Student.prototype === student1.__proto__)