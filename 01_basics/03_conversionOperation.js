let score = "33abc"
let score1 = null
console.log(typeof score);
console.log(typeof score1);
let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log(valueInNumber1);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" = false
// "zee" = true

let someNumber = 33
 let stringNumber = String(someNumber)
 console.log(stringNumber);
 console.log(typeof stringNumber);

 // *********operations********

 let value  = 3
 let negValue = -value
 //console.log(negValue);  

 //console.log(2+2);
 //console.log(2-2);
 //console.log(2*2);
 //console.log(2**2);
 //console.log(2/2);
 //console.log(2%2);

 let str1 = "hii"
 let str2 = " zee"
 let str3 = str1 + str2
 console.log(str3);

 console.log("1" + 2);
 console.log(1 + "2");
 console.log("1" + 2 + 2);
 console.log(1 + 2 + "2");

 console.log( (3 + 4) * 5 / 6);

 console.log();

 let gameCounter = 100
 gameCounter++;
 console.log(gameCounter); 