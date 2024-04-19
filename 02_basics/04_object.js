const tinderUser = new Object();

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "ritesh",
            lastname: "kumar",
        }
    }
}

console.log(regularUser.fullName?.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 1,
        email: "1@gmail.com"
    },
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));