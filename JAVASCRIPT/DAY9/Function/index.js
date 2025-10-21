// function declaration
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

// function expression  
const multiply = function (a, b) {
    return a * b;
}   
console.log(multiply(2, 3)); // Output: 6

// arrow function
const subtract = (a, b) => a - b; 
console.log(subtract(5, 3)); // Output: 2

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("This is an IIFE");
})(); // Output: This is an IIFE    
// function as first class citizens
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// function as callback 
function processUserInput(callback) {
    const name = "Bob";
    console.log(callback(name));
}       
processUserInput(greet); // Output: Hello, Bob!
// function with default parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}   
console.log(power(3)); // Output: 9
console.log(power(2, 3)); // Output: 8
// function with rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}   
console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 10, 15)); // Output: 30
// function with spread operator
function displayColors(color1, color2, color3) {    
    console.log(`Colors: ${color1}, ${color2}, ${color3}`);
}
const colors = ["Red", "Green", "Blue"];
displayColors(...colors); // Output: Colors: Red, Green, Blue
// function with closure
function outerFunction(outerVariable) { 
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    }   
}
const newFunction = outerFunction("outside");
newFunction("inside");  // Output: Outer Variable: outside
                        //         Inner Variable: inside
// function with recursion      
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(0)); // Output: 1
// function with methods
const calculator = {
    add: function (a, b) {  
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;   
    },
    multiply: function (a, b) {
        return a * b;   
    },
    divide: function (a, b) {
        if (b === 0) {  
            return "Error: Division by zero";
        }       
        return a / b;
    }   
};
console.log(calculator.add(10, 5)); // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5