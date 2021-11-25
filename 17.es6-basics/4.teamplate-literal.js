let simple = 'This is template \n literal'

console.log(simple)

console.log("Hello %s your id is %i", "Uma", 1234)
console.log('your Object is %o', {id:1, name:'uma'})

let str = `Template Literal in ES6`
console.log(str)
console.log(str.length)
console.log(typeof str)

// Using Single Quote

let someString = `Here's a template literal`
console.log(someString)

// String contaiing back ticks

let strWithbackTicks = `Temaplte literals uses backticks \` instead of quotes `

console.log(strWithbackTicks)

let para = `This text
can
span multiple lines
`
console.log(para)

let firstName='John',
    lastName ="Galt"

let greeting = `Helo Mr.${firstName} ${lastName}`

console.log(greeting)