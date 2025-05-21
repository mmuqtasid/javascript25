//Array in JS

let ArrOne = [1 , 2 , 3 ,4 ,5 ]
console.log(ArrOne);

let arrTwo = ["Alternative" , "Alexa" , "Gemini" ];

let myArr = new Array (0 , 1 ,2 ,3 ,4 ,5 ,6);

console.log(myArr);
console.log(arrTwo);
console.log(arrTwo[1]);
console.log(ArrOne.push(6));
console.log(ArrOne);
ArrOne.pop();
console.log(ArrOne);
ArrOne.shift();
console.log(ArrOne);
ArrOne.unshift();
console.log(ArrOne);

console.log(ArrOne.includes(4));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 2));

//Slice
const fruitsOne = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);