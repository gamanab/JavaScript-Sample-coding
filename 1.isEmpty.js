// Write a function that checks if the string is empty give output as true ither ouput is false
// Example - empty('') -> true
//           empty(' ') -> false
//           empty('hi') -> false


// Named function
function empty(a) {
    if (a === '')
        return `true`;
    else
        return `false`;
}
console.log(empty(""));
console.log(empty(" "));
console.log(empty("hi"));
console.log(empty(123));
