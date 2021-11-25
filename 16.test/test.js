// console.log(multiply(2)(3)(4)) //24

// function multiply(num3){
//     return function(num2){
//         return function(num1){
//             return num3*num2*num1
//         }
//     }
// }

// var a =10; // Primitive type
// var b =a;
//     a =20;
// console.log(a)
// console.log(b)

// var a =[1,2]
// var b = a;
// a.push(3)
// console.log(a)
// console.log(b)

// var a = [1,2] // one
// var b =a; // pointing to one
//     a =[1,2,3] // two
// console.log(a)
// console.log(b)

// var output1 = "Uma" + 1
// console.log(output1) // Uma1

// var output2 = 1+2+ "uma" + 3+4
// console.log(output2) // 3Uma34

// var output = (function(x){
//     delete x
//     return x
// })(0)

// console.log(output)

// Empty an array
//var array =['a', 'b', 'c', 'd', 'e', 'f']

// Method1
//array =[]

// Method2
//array.length =0

//Method3
// while(array.length){
//     array.pop()
// }

// Method4
// array = array.map(function(){
//     return []
// })

//Method5
//array.splice(0, array.length)
//console.log(array)

// var x =1 
// var output = (function(){
//     delete x;
//     return x
// })()

// console.log(output)

// console.log(evenorOdd(3)) // false
// console.log(evenorOdd(6)) // true
// console.log(evenorOdd(7)) // false

// // function evenorOdd(num){
// //     return !(num%2)
// // }


// function evenorOdd(num){
//     return num%2==0
// }

// function evenorOdd(num){
//     return !(num&1)
// }

// console.log(extensionExtractor('resume.doc')) // doc
// console.log(extensionExtractor('bangalore.txt')) // txt
// console.log(extensionExtractor('notepad')) // false
// console.log(extensionExtractor()) // false

// // function extensionExtractor(fileName){
// //     if(fileName){
// //         return fileName.split(".").length>1?fileName.split(".")[1]:false
// //     }
// //     return false 
// // }

// function extensionExtractor(fileName){
//    return fileName && fileName.split(".").length>1 ? 
//                       fileName.split(".")[1]:
//                       false
// }

// var message = "Hello World Uma" // olleH dlroW amU

// var output = message.split("")
//                     .reverse()
//                     .join("")
//                     .split(" ")
//                     .reverse()
//                     .join(" ")

// console.log(output)

console.log(arraySum([1,2,3,4,5])) //15
console.log(arraySum([1,2,3,4,5, 6, 7, 8, 9, 10])) //55
console.log(arraySum([1,2,3,'uma',4,5])) //15
console.log(arraySum([1,2,3, 'uma', {a:'ma'},4,5])) //15
console.log(arraySum([1,2,[[3],4],5])) //15

function arraySum(value){
    var total =0;
    value.forEach(function(number){
        if(typeof number === 'number'){
            total = total + number
        } else if(Array.isArray(number)) {
            total = total + arraySum(number)
        }
    })
    return total
}

var arry = [
    {name: 'uma', age:39},
    {name: 'swathi', age:39},
    {name: 'jagrav', age:8, email: 'jag@ef.com'}
]

console.table(arry)