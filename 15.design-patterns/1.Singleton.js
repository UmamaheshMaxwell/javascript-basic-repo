var Singleton = (function(){

    var instance = null;

    var createInstance = function(){
        var obj = Object.create(null)
        console.log('Object has been created')
        return obj;
    }

    var getInstance = function(){
        if(!instance){
            instance = createInstance()
        }
        return instance
    }


    return {
        getInstance: getInstance
    }

})()

console.log(Singleton)
 var singleton1 = Singleton.getInstance()
 console.log(singleton1)
 var singleton2 = Singleton.getInstance()
 console.log(singleton2)
 var singleton3 = Singleton.getInstance()
 console.log(singleton3)
 var singleton4 = Singleton.getInstance()
 console.log(singleton4)


