//* console.log("foo" && "bar") - what will print ?
/**
 * In JavaScript, the && (logical AND) operator returns the second operand if the first one is truthy. So:
 *  -"foo" is a truthy value.
 *  - Since the first operand is truthy, the expression returns the second one: "bar".
    console.log(undefined && "bar");
 */

//*Immutable

let str = "hello";
str[0] = "H"; // This will not change the string
console.log(str); // "hello"