// here i am using rest operator in the function parameter

function userCart(...num1) {
    return num1
}

// this will return us an array
console.log(userCart(100, 200, 300, 400, 600))

const instaUser = {
    id: "ghouse_12",
    password: "12edsfgha320",
    name: "Mohd Ghouse Tazeem",
    email: "ghouse@gmail.com",
    isLoggedIn: false
}

// in this functio we are passing object as a paramter
function userData(anyobject) {
    console.log(`User id is ${anyobject.id}, password is ${anyobject.password}, and Name and email is ${anyobject.name} and ${anyobject.email}`)
}

// one way to call the function after definig the object
// userData(instaUser)

// we can directly define the object in the function call itself

userData({
    id: "hamza_234",
    password: "23hyalsdjf@ds",
    name: "Chaati",
    email: "hamza@chaatibaaz.com"
})

// same way we can do it with arrays as well
const myArr = [1, 3, 4, 6, 7, 20]

function arrayManipulator(userArray) {
    console.log(userArray[3])
}

// arrayManipulator(myArr)

// we can create the array in the function call itself as we did with object
arrayManipulator([1, 2, 3, 4, 5, 6])