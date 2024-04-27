// const user = {
//     username: 'Hitesh',
//     loginAccount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got details");
//         // console.log(`Username: ${this.username}`)
//         console.log(this)
//     },

// }

// const user2 = {
//     username: 'Hitesh',
//     loginAccount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got details");
//         // console.log(`Username: ${this.username}`)
//         console.log(this)
//     },


// }


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

const user1 = new User('hitesh', 2, true)
const user2 = new User('chai', 2, true)
console.log(user1);
console.log(user2);

// when we use "new" keyword 
// 1 - New Object create
// 2 - Call constructor function
// 3 - add values through "this" keyword
//  constructor is reference to itself
// Instance of 