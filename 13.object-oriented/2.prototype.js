function Student(){
    this.name ="John"
    this.gender = "male"
}

Student.prototype.age = 15

var studObj1 = new Student()
studObj1.age = 20
console.log(studObj1)
console.log(studObj1.age)

var studObj2 = new Student()
console.log(studObj2.age)