let myName = "Hitesh";

console.log(myName.trueLength);

let myHeros = ["thor", "hulk"];

let heroPower = {
    thor: "hammer",
    hulk: "smash",

    getSpider: function(){
        console.log(`Huk power is ${this.hulk}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`I am everywhere`);
}

Array.prototype.heyRitesh = function(){
    console.log(`Hitesh say hello`);
}

// myHeros.hitesh();
// myHeros.heyRitesh();
// heroPower.heyRitesh();

// Inheritance

const User = {
    name: "chai",
    email: "google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignement: 'Js Assignement',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let another = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

another.trueLength();
"hitesh".trueLength();
"ice   ".trueLength();

