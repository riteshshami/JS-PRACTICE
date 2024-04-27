// Promises is an object representing eventual completetion

// const promise1 = new Promise(function(resolve, reject){
//     // Do any async task;
//     // DB calls, cryptograohy
//     setTimeout(function(){
//         console.log('Async Task is complete')
//         resolve()
//     }, 1000)
// });

// promise1.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2')
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 is resolved")
// })

// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: 'Chai', email: "chai@ex.com"})
//     }, 1000)
// })

// promise3.then(function(user){
//     console.log(user.username);
// })

// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error){
//             resolve({username: 'Chai', email: "chai@ex.com"})
//         }else{
//             reject('Something went wrong')
//         }
//     }, 1000)
// })

// promise4
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username)=> {
//     console.log(username);
// })
// .catch((error)=>{console.log(error)})
// .finally(()=>console.log("The promise is either resolved or rejected"))

// const promise5 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error){
//             resolve({username: 'js', email: "js@ex.com"})
//         }else{
//             reject('Something went wrong')
//         }
//     }, 1000)
// })

// async function consumePromise5(){
//     try{
//         const response = await promise5;
//         console.log(response)
//     }catch(error){
//         console.log(error);
//     }
// }

// consumePromise5();

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log(error)
//     }
// }

// getAllUsers();

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))
// .finally()

// https://witeboard.com/e8310980-038b-11ef-8f17-6db9ff0a766d