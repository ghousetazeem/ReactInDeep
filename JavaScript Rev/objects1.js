// Creating an Object

// Creating a symbol (data type) to use it in object
const mySym = Symbol("Hehe")
const jsUser = {
    name: "Mohd Ghouse Tazeem",
    age: 21,
    [mySym]: "my key 1",
    email: "ghouse@google.com",
    dob: "2020"
}

// jsUser.age = 22
// console.log(jsUser)
// Object.freeze(jsUser)
// jsUser.age = 24
// console.log(jsUser)

jsUser.greetings = function () {
    console.log("Hello JS User")
}

jsUser.greetingsTwo = function () {
    console.log(`Hello ${this.name} JS User`)
}

console.log(jsUser.greetings())
console.log(jsUser.greetingsTwo())
// This will be printing the object including the greetings and greetingsTwo key in it whose values will be taken in function
console.log(jsUser)