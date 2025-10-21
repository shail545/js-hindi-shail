// clouser

function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    }
}
const counter = outer();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3    
console.log(calculator.add(5, 3));      // Output: 8            
console.log(calculator.subtract(5, 3)); // Output: 2
console.log(calculator.multiply(5, 3)); // Output: 15   
console.log(calculator.divide(5, 0));   // Output: Error: Division by zero
console.log(calculator.divide(6, 3));   // Output: 2
console.log(counter()); // Output: 4

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



