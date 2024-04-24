// Immedialtely invoked function expression

(function chai(){
    // named iife
    console.log('DB CONNECTED');
})(); // <- semi colon is important

((name) => {
    // unnamed iife
    console.log(`DB CONNECTED AGAIN ${name}`)
})('ritesh');

((book) => {
    console.log(`${book}`)
})('Elaquant JavaScript');

// global scope ke pollution ko avoid karne ke liye IIFE ka use karo

//  https://witeboard.com/b4f05e30-fec8-11ee-85b2-f58c99310d4a  -> Whiteboard link of behind the scene
