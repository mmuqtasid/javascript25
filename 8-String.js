//String
let camelCase = "NameAbcd";
console.log(camelCase);

//String Methods
// console.log(camelCase.length());
// console.log(camelCase.charAt(2));
// console.loh(camelCase.charCodeAt(3))
const str = "Hello World";
console.log(str.length);

console.log(str.charAt(0));
console.log(str.charAt(6));

console.log(str.charCodeAt(0));
console.log(str.charCodeAt(6));

console.log(str.at(0));
console.log(str.at(-1));

console.log(str[0]);
console.log(str[6]);

console.log(str.slice(0, 5));
console.log(str.slice(6));
console.log(str.slice(-5));

console.log(str.substring(0, 5));
console.log(str.substring(6));

console.log(str.substr(0, 5));
console.log(str.substr(6, 5));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2));
console.log("Hello".concat(" ", "World", "!"));

const str3 = "   Hello World   ";
console.log(str3.trim());
console.log(str3.trimStart());
console.log(str3.trimEnd());

const str4 = "5";
console.log(str4.padStart(3, "0"));
console.log("42".padStart(5, "*"));
console.log(str4.padEnd(3, "0"));
console.log("42".padEnd(5, "*"));

const str5 = "Hello";
console.log(str5.repeat(3));

const str6 = "Hello World";
console.log(str6.replace("World", "JavaScript"));
console.log("hello hello".replace("hello", "hi"));

console.log("hello hello".replaceAll("hello", "hi"));

console.log(str6.split(" "));
console.log("a,b,c,d".split(","));
console.log("Hello".split(""));

console.log(str6.indexOf("o"));
console.log(str6.indexOf("o", 5));

console.log(str6.lastIndexOf("o"));
console.log(str6.lastIndexOf("o", 5));

console.log(str6.search(/World/));
console.log(str6.search(/[A-Z]/g));

console.log(str6.match(/[A-Z]/g));

const matches = [...str6.matchAll(/[A-Z]/g)];
console.log(matches.map(m => m[0]));

console.log(str6.includes("World"));
console.log(str6.includes("world"));
console.log(str6.includes("Hello", 1));

console.log(str6.startsWith("Hello"));
console.log(str6.startsWith("World"));
console.log(str6.startsWith("World", 6));

console.log(str6.endsWith("World"));
console.log(str6.endsWith("Hello"));
console.log(str6.endsWith("Hello", 5));

const str7 = "b";
console.log(str7.localeCompare("a"));
console.log(str7.localeCompare("b"));
console.log(str7.localeCompare("c"));

const str8 = "HELLO";
console.log(str8.toLocaleLowerCase());
console.log(str8.toLocaleLowerCase('tr'));

const str9 = "hello";
console.log(str9.toLocaleUpperCase());
console.log(str9.toLocaleUpperCase('tr'));

const str10 = '\u00F1';
console.log(str10.normalize('NFC'));
console.log(str10.normalize('NFD'));

const strObj = new String("Hello");
console.log(strObj.valueOf());
console.log(strObj.toString());

console.log(String.raw`Hello\nWorld`);
