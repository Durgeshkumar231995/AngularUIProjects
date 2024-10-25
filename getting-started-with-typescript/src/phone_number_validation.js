/*

The checkPhoneNumber() function should accept phoneNumber as input and check if it is valid.

The provided phoneNumber is a valid phoneNumber if its value matches with any of the pattern suggested below:


+1 0999999999,
+1 099-999-9999,
+1 (099)-999-9999,
  +1 (099)9999999,
  +1 099 999 9999,
  +1 099 999-9999,
  +1 (099) 999-9999,
  +1 099.999.9999
  +10999999999,
  +1099-999-9999,
  +1(099)-999-9999,
  +1(099)9999999,
  +1099 999 9999,
  +1099 999-9999,
  +1(099) 999-9999,
  +1099.999.9999
  
  The function should return true if validation criteria is satisfied else should return false.
  
  Use Regular Expression to perform validation check.

*/
function checkPhoneNumber(phoneNumber) {
    var regex = /^\+1\s?(?:\(\d{3}\)|\d{3})[\s.\-]?\d{3}[\s.\-]?\d{4}$/;
    return regex.test(phoneNumber);
}
console.log(checkPhoneNumber('+1 0999999999')); // true
console.log(checkPhoneNumber('+1 099-999-9999')); // true
console.log(checkPhoneNumber('+1 (099)-999-9999')); // true
console.log(checkPhoneNumber('+1 (099)9999999')); // true
console.log(checkPhoneNumber('+1 099 999 9999')); // true
console.log(checkPhoneNumber('+1 099 999-9999')); // true
console.log(checkPhoneNumber('+1 (099) 999-9999')); // true
console.log(checkPhoneNumber('+1 099.999.9999')); // true
console.log(checkPhoneNumber('+10999999999')); // true
console.log(checkPhoneNumber('+1099-999-9999')); // true
console.log(checkPhoneNumber('+1(099)-999-9999')); // true
console.log(checkPhoneNumber('+1(099)9999999')); // true
console.log(checkPhoneNumber('+1099 999 9999')); // true
console.log(checkPhoneNumber('+1099 999-9999')); // true
console.log(checkPhoneNumber('+1(099) 999-9999')); // true
console.log(checkPhoneNumber('+1099.999.9999')); // true
console.log(checkPhoneNumber('+1 099-9999')); // false (Invalid pattern)
console.log(checkPhoneNumber('0999999999')); // false (Invalid pattern)
