/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!",
if non-numeric value is passed to the function.

*/
function drawPattern(rows) {
    if (typeof rows !== 'number' || isNaN(rows) || rows < 1) {
        return "Invalid Input Type, Row Input Should Be of Type Number !!";
    }
    var pattern = '';
    for (var i = 1; i <= rows; i++) {
        pattern += ' '.repeat(rows - i);
        pattern += '* '.repeat(i).trimEnd();
        pattern += ' \n';
    }
    return pattern;
}
console.log(drawPattern(5));
