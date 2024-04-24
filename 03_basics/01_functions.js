// console.log("H");
// console.log("H");
// console.log("H");
// console.log("H");
// console.log("H");

function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;

    return num1 + num2;
}

const result = addTwoNumbers(2, 3);

// console.log(result);

function loginUserMessage(userName="Sam"){
    if(!userName){
        console.log("Please enter a username");   
        return      
    }
    return `${userName} just logged in`
}

console.log(loginUserMessage());



function calculateCartPrice(...num1){
    return num1;
}

function calculateCartPrice2(val1, val2, ...num1){
    return val1, val2, num1;
}

console.log(calculateCartPrice2(200, 400, 500, 600, 700, 800));

const user = {
    username: "Ritesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);

const myNewArr = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArr));