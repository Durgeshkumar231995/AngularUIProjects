/*

The replaceString() function should accept 3 string inputs.

The function should search for second string in first string and if found should replace it with third string.

The function should return the replaced string.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type String !!",
for any non-numeric value passed to the function.

*/
function replaceString(source, search, replace) {
    if (typeof source !== 'string' || typeof search !== 'string' || typeof replace !== 'string') {
        return "Invalid Input Types, All Inputs Should Be of Type String !!";
    }
    return source.split(search).join(replace);
}
console.log(replaceString("Hello Durgesh", "Durgesh", "TypeScript-Durgesh"));
