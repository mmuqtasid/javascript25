// DataTypes Summary
//Premitive
//Premitive are call by name - it have 7 type
//String - Number - Null - Boolean - undefined - Symbol - BigInt - 

let nameOf = "Student";
let RollNoStudent = 3173;
let Cnic ;
let Res = 0;
let chair = null;
let Streng = 22222123232323232323333333333333333333333333n;
console.log(typeof nameOf);
console.log(typeof RollNoStudent);
console.log(typeof Cnic);
console.log(typeof Res);
console.log(typeof Streng)
//Non Primitive or Refernce Type
//Objective - Array - Function

let arrUser = ["Name" , "Class" , "Room"];

let person = {
    name:"user",
    age:26,
    role:"dev",
    address : " ",
}

let Dteails = function User(x , y) {
    console.log("Test Function")
}

let testSymbol = Symbol(12);

console.log(typeof arrUser);
console.log(typeof person);
console.log(typeof Dteails);
console.log(typeof testSymbol);
