// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789987654321n
// Non Primitive(Reference)

// Array, Objects, Functions, 

const heros = ["iron man", "Ra.one", "Zeeshan"];
{
    name: "spiderman";
    age: "22" ;
}

const myFunction = function(){
    console.log("Hii");
}

console.log(typeof myFunction);

//***********

// Memory => Stack(Primitive), Heap(Non-Primitve)


let myInstaname =  "Itszee"

let anothername = myInstaname
anothername = "Itzzee"

console.log(myInstaname);
console.log(anothername);

let userOne = {

    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "Zee@google.com"

console.log(userOne.email);
console.log(userTwo.email);