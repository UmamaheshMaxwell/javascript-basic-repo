/*
    ? Function Scoped
*/

// function Sample(){
//     var foo ="blue"
//     console.log(foo) // blue
// }

// console.log(foo) // ReferenceError: foo is not defined

/*
    ? Block Scoped
*/

// function sample(){

//     if(true) {
//         var foo  ='Hello'
//         let bar  ="How are you ?"
//         const baz="I am fine"
    
//         console.log(foo)
//         console.log(bar)
//         console.log(baz)
//     }
//     console.log(foo)
//     // console.log(bar)
//     //console.log(baz)
// }

// sample()

// for(var i=0; i<3;i++) {
//     console.log(i)
// }
// console.log(i)

// for(let i=0; i<3;i++) {
//     console.log(i)
// }
// console.log(i)

// Re-Defining let

// var a =10;
// var a =20;

// function Sample(){
//     let foo=1;
//         foo=10; //re-assigned
    
//     let foo=101
//     console.log(foo)
// }

// Sample()

// function Sample(){
//     const foo=1;
//        // foo=10; //re-assigned
    
//     //let foo=101
//     console.log(foo)
// }

// Sample()

const myBoolean = true

if(myBoolean) {
    const turtles = ['cat', 'max', 'dave']

     turtles.push('brain')

     console.log(turtles)
}