"use strict";
// stack (primitive), Heap Non-primitive

let mywork= "JS";

let myotherwork = mywork;

myotherwork = "php";

console.log(mywork);


// const Users ={
//     name: "Ahmed",
//     lname: "raza",
//     email: "ahmed@google.com",
//     isLoggedIn: false,
//     LastLogedInDays: ["Monday", "Saturday"]
// }

// Users.email ="raza@g.gmail.com"
// console.log(Users.name);
// console.log(Users["email"]);



// Array 
const myArray = [0,1,2,3,4,5,88]

// myArray.push(6)
// myArray.pop()
// myArray.unshift(90)
// myArray.shift()
// console.log(myArray.includes(4));
// console.log(myArray.indexOf(88));


// const newArr = myArray.join()

// console.log(myArray);
// console.log(typeof newArr);


// Slice. splice

let count =[3,4,6,7,5,2,1,45,41];

let section= count.slice(4);
console.log(section);