// Write a function that checks if the string is empty give output as true ither ouput is false
// Example - empty('') -> true
//           empty(' ') -> false
//           empty('hi') -> false


// function declaration ( Named function )
function empty(a) {
    if (a === '') {
        return true;
    } else {
        return false;
    }
}
console.log(empty(""));
console.log(empty(" "));
console.log(empty("hi"));
console.log(empty(123));

// Function Expression (Anonymous Function)
const empty1 = function (a1) {
    if (a1 === '') {
        return true;
    } else {
        return false;
    }
}
console.log(empty1(""));
console.log(empty1(" "));
console.log(empty1("hi"));
console.log(empty1(123));

//Arrow Function (Explicit Return)
const empty2 = (a2) => {
    if (a2 === '') {
        return true;
    } else {
        return false;
    }
}
console.log(empty2(""));
console.log(empty2(" "));
console.log(empty2(123));

//Arrow function (Implicit Return - Shorter Syntax)
const empty3 = (a3) => a3 === "" ? true : false;
console.log(empty3(""));
console.log(empty3(" "));
console.log(empty3("hi"));
console.log(empty3(123));



