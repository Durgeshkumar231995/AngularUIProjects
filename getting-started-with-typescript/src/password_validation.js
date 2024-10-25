/*

The checkPassword() function should accept password as input and check if it is valid.

The validation criteria for password are:
- should have minimum 6 characters and maximum 20 characters
- should have at least one lower-case and one upper-case alphabet
- should have at least one digit
- should have at least one symbol

The function should return true if validation criteria is satisfied else should return false.

Use Regular Expression to perform validation check.

*/
function checkPassword(password) {
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,20}$/;
    return pattern.test(password);
}
console.log(checkPassword("Valid1@"));
console.log(checkPassword("Valid1@Pass"));
console.log(checkPassword("invalidpassword"));
console.log(checkPassword("SHORT1@"));
console.log(checkPassword("LONGpassword1234@"));
