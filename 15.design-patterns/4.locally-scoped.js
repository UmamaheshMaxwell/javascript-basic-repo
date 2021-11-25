/*
    ? Locally Scoped Object literal
*/
var Module = (function(){

    var myObject = {}
    var privateMethod = function(){}
    myObject.someMethod = function(){

    }
    return myObject
})()

console.log(Module)