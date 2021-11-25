/*
    ? Spread operator unpacks elements from an array
    ? Rest operator packs elemenst into an array
*/
const odd =[1,3,5]
const combined = [2,4,6,...odd]
console.log(combined)

function display(a,b,c, ...args){
    console.log(args)
}
display(1,2,3,4,5)

// Constructing array literal
let initialChars = ['A', 'B']
let chars = [...initialChars, 'C','D']
console.log(chars)

// Concatenate two arrays

let numbers = [1,2]
let morenumbers = [3,4]
let allNumbers = [...numbers, ...morenumbers]
console.log(allNumbers)

// copying an array

let scores = [80,70,90]
let copiedScores = [...scores]
console.log(copiedScores)

// Spread with string
let newChars = ['A', ...'BC','D']
console.log(newChars)