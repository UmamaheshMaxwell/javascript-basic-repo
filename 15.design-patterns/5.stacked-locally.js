/*
    ? Stacked Locally Scoped Object 
*/
var Module = (function(){
    var privateMethod = function(){

    }

    var myObject = {
        someMethod: function(){},
        anotherMethod:  function(){}
    }
    return myObject
})()