//String Methods;

let consumerId = "952A";
console.log(consumerId);

//Length of String;
console.log()
const str = "Life, the universe and everything. Answer:";

console.log(`${str.length}`);
console.log(`${consumerId.length}`);

//concat;
console.log(`${str} ${consumerId} `);

let conCat = `${str} ${consumerId}`;

console.log(conCat)

//LowerCase
console.log(`${str.toLowerCase()}`)
//UpperCase
console.log(str.toUpperCase());
//indeOf
const Str = "Life, the universe and everything. Answer:";
const lowerStr = str.toLowerCase();

const firstIndex = lowerStr.indexOf('a');
const lastIndex = lowerStr.lastIndexOf('a');

console.log(`First index of 'a' or 'A' is: ${firstIndex}`);
console.log(`Last index of 'a' or 'A' is: ${lastIndex}`);

console.log(`First index of 'a' or 'A' is: ${firstIndex}`);
console.log(`Last index of 'a' or 'A' is: ${lastIndex}`);
console.log(`${str.charAt(3)}`);

//Trim

let TrimStr = "   This is String Trim";

console.log("   This is String Trim");
console.log(`This is Trim ${TrimStr.trim()}`);

//Start Trim 

let startTrim1 = "      this is Start Trim          ";
console.log(`${startTrim1} after trim > ${startTrim1.trimStart()}`);

//End Trim


let endTrim1 = "      this is Start Trim          ";
console.log(`${endTrim1} after trim > ${startTrim1.trimEnd()}`);

//CharAt

let CharAtt = "This is CharAT";
console.log(`${CharAtt.charAt(3)}`);

//Pad String

let padString = "This is Padding String";
console.log(`${padString.padEnd()}`);
console.log(`${padString.padStart()}`)

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

//Reoeat
let text2 = "Hello world!";
let result = text.repeat(2);

console.log(result);

//
let Ttext = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);


//Replace All

let ReplaceString = "This is Words";

console.log(`${ReplaceString.replaceAll("This is Words")}`);

let text12 = "I love cats. Cats are very easy to love. Cats are very popular."
text12 = text.replaceAll("Cats","Dogs");
text12 = text.replaceAll("cats","dogs");

console.log(text12);