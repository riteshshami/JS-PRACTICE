const name = 'ritesh';
const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// declaration of string
const gameName = new String('hiteshh-hc-youtube-javascript')

console.log(gameName[0]);
console.log("Prototype", gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(2, 5);

console.log(newString);

// slice mdn
const anotherString = gameName.slice(5, -7);
console.log("Focus here", anotherString);

const newString1 = " hitesh \n";
console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh.com/hitesh%20chaudhary";

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));