function User(email, password, username){
    this._email = email;
    this._password = password;
    this._username = username;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(){
            this._password = value
        }
    })

    Object.defineProperty(this, 'username', {
        get: function(){
            return this._username.toUpperCase();
        },
        set: function(){
            this._username = value
        }
    })
}

const chai = new User("chai@gmail.com", "chai", "lucifer");

console.log(chai.username);