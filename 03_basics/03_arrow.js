const user = {
    username: "Ritesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();


// console.log(this);

// function chai(){
//     let username = "Ritesh"
//     console.log(this.username);
// }

// chai();

// const chai = () => {
//     let username = "Ritesh"
//     console.log(this.username);
// }

// chai();

// this should be associated with the object to work 


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "Hitesh"})

// console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8];

