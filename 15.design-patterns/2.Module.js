var Module = (function(){
    var privateMethod = function(){
        // do something
    }

    return {
        publicMethod : function(){
            return 'This is public method'
        }
    }
})()

console.log(Module.publicMethod())