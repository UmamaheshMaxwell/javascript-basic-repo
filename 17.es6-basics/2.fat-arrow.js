// let add = function(x,y){
//     return x + y;
// }

// let add = (x,y) => {
//     return x + y;
// }

//let add = (x,y) =>  x+y ;

// let add = (x,y) => { return x+y} ;

// console.log(add(10,20))

// Both are equal
/*
    ? () => expression
    ? () => {return expression}
*/

// Sort an array

// let numbers = [4,2,6]

// numbers.sort(function(a, b){
//     return b-a
// })


// let numbers = [4,2,6]

// numbers.sort((a, b) => b-a)

// console.log(numbers)

// // Takes a single parameter

// let names =["John", "Scott", "Adam", "Tuan"]

// let lengths = names.map(name => name.length)

// console.log(lengths)

// // With no paramaters

// let logDocument = () => console.log(window.document)
// logDocument()

// // Line Breaks

// // let multiply = (x,y) 
// // => x+y // This will throw error  : Unexpected token '=>'

// let multiply = (x,y) => 
// x+y

// console.log(multiply(2,3))

// Object Literal

// let setColor = function(color) {
//     return {value:color}
// }



let setColor = color => ({value:color})

let backgroundColor = setColor('Green')
console.log(backgroundColor)