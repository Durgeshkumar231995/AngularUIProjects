/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!",
for any non-numeric value passed to the function.

*/
function calculateNetPayable(pricePerKilo, quantityInKilo, discountPercentage) {
    if (typeof pricePerKilo !== 'number' || typeof quantityInKilo !== 'number' || typeof discountPercentage !== 'number' ||
        isNaN(pricePerKilo) || isNaN(quantityInKilo) || isNaN(discountPercentage)) {
        return "Invalid Input Types, All Inputs Should Be of Type Number !!";
    }
    var totalPrice = pricePerKilo * quantityInKilo;
    var discountAmount = (totalPrice * discountPercentage) / 100;
    var netPayable = totalPrice - discountAmount;
    return netPayable;
}
console.log(calculateNetPayable(10, 5, 20));
console.log(calculateNetPayable(15, 3, 10));
console.log(calculateNetPayable(10, '5', 20));
console.log(calculateNetPayable(10, 5, '20'));
