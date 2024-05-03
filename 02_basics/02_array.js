const marvel_heros = ["thor", "captain", "hulk"];
const dc_heros = ["batman", "superman", "flash"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const allNewHeros = [...marvel_heros, ...dc_heros];
// console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]]

const an_array = another_array.flat(Infinity);

// console.log(an_array);


// console.log(Array.isArray("Ritesh"));
console.log("Com here", Array.from({name: "Hitesh"})); // interesting case
// use only iterables to create arrays dictionary cannot do this from this method.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


