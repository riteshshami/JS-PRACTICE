
// var c = 300;

let a = 300;

// if (true) {
//     let a = 10;
//     const b = 20;
//     console.log("Inner:", a);
//     var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "Ritesh"

//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     console.log(website);

//     two()
// }

// one()

if (true) {
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++++++++++=Interesting+++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}



addTwo(5);
const addTwo = function(num){
    return num + 2
}

// Function which are wrapped in an binding do not hoist