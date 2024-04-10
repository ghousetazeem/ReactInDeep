// Single ton object
const instaUser = new Object()
instaUser.name = "muhammedghousetazeem"
instaUser.isLoggedIn = true
instaUser.email = "ghousetazeem75@gmail.com"

// console.log(instaUser)

// This is not a single ton object, mutli ton object

// Also creating a nested object
const snapchat = {
    name: "Ghouse",
    email: "ghousetazeem@google.com",
    fullname: {
        firstName: "Ghouse",
        secondName: "Tazeem"
    }
}

// To access the nested object
// console.log(snapchat.fullname.firstName)

const object1 = { id1: "123!@#", password1: "hgahlkaj124sdfa" }
const object2 = { id2: "123!@#", password2: "hgahlkaj124sdfa" }

// this will print the two objects in one object
const object3 = { object1, object2 }
// console.log(object3)
// this will add the values in object1
// const object4 = Object.assign(object1, object2)

// this will add the values in empty object that we are giving intially
// const object4 = Object.assign({}, object1, object2)
// console.log(object4)

// But we dont even use the above method, we just use updated method which is using spread operator
const object4 = { ...object1, ...object2 }
// console.log(object4)

const objectKeyArr = Object.keys(object4)
// console.log(Object.values(object4))
// console.log(objectKeyArr)

// Destructring the object
// It is widely used in React

const youtubeUserInfo = {
    emailIdOfUser: "ghousetazeem@gmail.com",
    name: "ghouse",
    hehehe: "hahaha",
    age: 21
}
const { emailIdOfUser: email } = youtubeUserInfo
console.log(email);

// API format
// API data is always in JSON Format. Javascript Object Notation
// Json is somethig which doesnt have the variable and its same like object

// Example:
// {
//     "name":"ghouse"
// }

// And in the json format key is also present in quotes