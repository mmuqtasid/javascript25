//Dates in JS
let todayDate = new Date();
console.log(todayDate);
console.log(todayDate.toDateString());
console.log(todayDate.toLocaleDateString());
console.log(typeof todayDate)


//Time

let myTimeStamp = Date.now;
console.log(myTimeStamp);

console.log(Math.floor(myTimeStamp/1000));