// ES6

// when object initialised through class, constructor is called

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc123`
    }

    usernameCaptilize(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@google.com", "123")

console.log(chai.encryptPassword());
console.log(chai.usernameCaptilize());

// behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.usernameCaptilize = function(){
//     return `${this.username.toUpperCase()}`
// }

// const tea = new User("chai", "chai@google.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.usernameCaptilize());

