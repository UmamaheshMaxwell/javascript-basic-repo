class Student {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName
    }

    add = () => {

    }
}

let student1 = new Student("Scott", "Desatnick");
console.log(student1)
console.log(student1.getFullName())