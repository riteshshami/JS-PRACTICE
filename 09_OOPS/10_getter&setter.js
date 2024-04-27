class User {
    constructor(email, password, username){
        this.email = email;
        this.password = password;
        this.username = username;
    }

    get email(){
        return this._email.toUpperCase();
    }

    get password(){
        return this._password.toUpperCase();
    }

    get username(){
        return this._username.toUpperCase();
    }

    set password(value){
        this._password = value.toUpperCase();
    }

    set email(value){
        this._email = value
    }

    set username(value){
        this._username = value
    }

}

const hitesh = new User("h@google.com", "abc", "lucifer");
console.log(hitesh.username);