// singleton => object only of its kind.



// Object.create => through constructor method which creates singleton

const mySym = Symbol("key1");

// object literals

const JSUser = {
    name: "Ritesh",
    "full Name": "RS",
    [mySym]: "mykey1",
    age: 21,
    location: "Jaipur",
    email: "ritesh@apple.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JSUser.email);
console.log(JSUser["email"]);
console.log(JSUser["full Name"]);
console.log(JSUser[mySym]);

// Use square brackets for taking symbols as keys 

// Object.freeze(JSUser);

JSUser.email = "ritesh@google.com";

console.log(JSUser.email);

JSUser.greeting = function(){
    console.log("Hello JS user");
}

JSUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name} and ${this.email}`)
}

console.log(JSUser.greeting());
console.log(JSUser.greeting2());
