class Shape {

    constructor(width, perimeter){
        this.width = width
        this.perimeter = perimeter
    }
 
    draw(){
        return "I am a generic Shape"
    }
}

class Circle extends Shape {
    constructor(){
        super(100, 200)
    }
    // draw(){
    //     return "I am Circle"
    // }
}

let circle = new Circle()
console.log(circle)
console.log(circle.draw())