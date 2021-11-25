let array = ["Scott", "Adam", "Tuan"]

let [name1, name2, name3] = array

console.log(name1, name2, name3)


let [firstName, lastName] ="John Galt".split(" ")

console.log(firstName, lastName)

let [fName, , lName] = ["Scott", "Adam", "Tuan"]

console.log(fName, lName)

let user = {
    name: 'John',
    age: 30
}

for(let [key,value] of Object.entries(user)){
    console.log(`${key} : ${value}`)
}

let options = {
    title: "Menu",
    width: 100,
    height:200
}

let {title, width, height} = options

console.log(title, width, height)