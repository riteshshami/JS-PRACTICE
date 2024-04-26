class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const hitesh = new User("h@google.com", "abc");
console.log(hitesh.password);