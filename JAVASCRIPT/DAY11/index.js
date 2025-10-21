// forEach , filter , map , reduce

const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log(num * 2)); // Output: 2, 4, 6, 8, 10 
// filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
            return "Error: Division by zero";   
// map
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
// reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
console.log(calculator.add(10, 5));      // Output: 15            
console.log(calculator.subtract(10, 5)); // Output: 5
console.log(calculator.multiply(10, 5)); // Output: 50   
console.log(calculator.divide(10, 0));  // Output: Error: Division by zero  // Output: 2 
console.log(calculator.divide(10, 2));   // Output: 5

// closure with counter
function createCounter() {
    let count = 0;  
    return function() {
        count++;
        return count;
    }   
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2






