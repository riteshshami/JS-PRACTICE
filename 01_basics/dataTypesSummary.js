// #1 Primitive

// 7 types: String, Number, Boolean, null, undefined, BigInt, Symbol

const score = 100; //JavaScript is a dynamically typed language
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

// console.log(id === anotherID)

const bigNumber = 1245467453478698709089n



//  #2 Reference (Non-Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "nagraaj", "doga"]
let myObj = {
    name: "ritesh",
    age: 22,
}

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof myFunction);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) => pass by value, Heap(Non-Primitive) => pass by reference

let myYoutubeName = "riteshshami@gmail.com";

let anotherName = myYoutubeName;
anotherName = "chaiAurCode";

console.log(anotherName);
// console.log(myYoutubeName);

let user1 = {
    email: "user@google.com",
    user: "Ritesh",
}

let user2 = user1;

user2.email = "riteshshami@gmail.com"

console.log(user2.email);
console.log(user1.email);
