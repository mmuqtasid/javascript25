//Array Part 2
let Marvel = ["Ironman" , "Spider" , "Boat"]
let Heros = ["John" , "Zamm" , "Marvel"]
let allHeros = [...Marvel, ...Heros]
console.log(allHeros);

//Concat

let allHeroz = Marvel.concat(Heros);
console.log(allHeroz);

//Flat Method

let ArrCount = [1 , 2, 3, 4, 5, 6 ,[1,2,3,4,5 ] , 7 , 8 , ["Muqtasid" , 9 , 10 , "End"]];

console.log(ArrCount.flat(Infinity));
