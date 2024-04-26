class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const Hitesh = new User("Hitesh");
// console.log(Hitesh.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "ritesh@google.com")
console.log(iphone.createId())


// https://witeboard.com/bbb81e10-03be-11ef-bfa2-11ee57063a11