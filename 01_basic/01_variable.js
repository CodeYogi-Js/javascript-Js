const accountId = 13445
let accountEmail = "ari@gmail.com"
var accountPassword = "25345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // Not allowed
accountEmail = "hcete@gmail.com"
accountPassword = "112345"
accountCity = "Bengaluru"

console.log(accountId)
/*
prefer not to use var
becuase of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])