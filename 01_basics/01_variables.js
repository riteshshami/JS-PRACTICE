const accountId = 12334;
let accountEmail = "riteshshami@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

{

}

accountEmail = "hc@hc.com"
accountPassword = "112233"
accountCity = "Agra"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);