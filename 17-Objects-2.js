//Object Part Two
const newUser = {};

newUser.id="123Abc";
newUser.name = "Muqtasid";
newUser.isLoggedin = false;

// console.log(newUser);

const oldUser = {
    email:"user@gmail.com",
    fullName:{
        flName:{
        firstName:"Abcd",
        lastName:"xyz",

    }
}
}
console.log(oldUser);
console.log(oldUser.fullName.flName.firstName);


const Obj1 = {1:"a" , 2:"b"}
const Obj2 = {3:"c" , 4:"d"}
const Obj3 = {5:"e" , 6:"f"}
const Obj4 = {Obj1,Obj2,Obj3}
console.log(Obj4);

//Constructor in JS
const cousre ={
    cousreName:"Math",
    price:999,
    teacher:"Abcd"
}

const {teacher:instructor} = cousre

console.log(instructor);