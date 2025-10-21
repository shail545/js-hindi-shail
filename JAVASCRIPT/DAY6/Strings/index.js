let str1="hello shail"    // these are called string literals
let str2='hello shail'  // both are same
let str3=`hello shail` // these are called template literals  , this is used when we want to use multi line strings , and is a modern way of writing strings

console.log(str1)
console.log(str2)
console.log(str3)
console.log(typeof str1)  // both are of type string
console.log(typeof str2)
console.log(typeof str3)

// we can use both single and double quotes inside template literals
let str4=`hello 'shail' "how are you"`
console.log(str4)   

// we can use both single and double quotes inside single or double quoted strings by using escape character \ before the quote
let str5='hello \'shail\' "how are you"'
let str6="hello 'shail' \"how are you\""
console.log(str5)
console.log(str6)
// but using template literals is a better way

// we can use template literals to create multi line strings
let str7=`hello shail
how are you`
console.log(str7)  // it will print in two lines
// but if we use single or double quotes it will give error
// let str8='hello shail
// how are you'  // it will give error
// console.log(str8)
// to avoid this error we can use escape character \n for new line
let str9='hello shail\nhow are you'
console.log(str9)  // it will print in two lines

// we can use template literals to embed expressions inside strings using ${}
let a=10
let b=20
let str10=`the sum of ${a} and ${b} is ${a+b}`
console.log(str10)  // it will print the sum of 10 and 20 is 30
// but if we use single or double quotes it will not evaluate the expression
let str11='the sum of ${a} and ${b} is ${a+b}'
console.log(str11)  // it will print the sum of ${a} and ${b} is ${a+b} 
// to avoid this we can use concatenation
let str12='the sum of '+a+' and '+b+' is '+(a+b)
console.log(str12)  // it will print the sum of 10 and 20 is 30
// but using template literals is a better way
// we can use backticks inside template literals by using escape character \ before the backtick
let str13=`hello \`shail\` how are you`
console.log(str13)  // it will print hello `shail` how are you
// but if we use single or double quotes it will give error
// let str14='hello `shail` how are you'  // it will give error
// console.log(str14)

// we can use string methods to manipulate strings
let str15="hello shail"
console.log(str15.length)  // it will print the length of the string
console.log(str15.toUpperCase())  // it will print the string in uppercase
console.log(str15.toLowerCase())  // it will print the string in lowercase
console.log(str15.indexOf('shail'))  // it will print the index of the substring
console.log(str15.slice(0,5))  // it will print the substring from index 0 to 5
console.log(str15.replace('shail','world'))  // it will replace the substring with another substring
console.log(str15.split(' '))  // it will split the string into an array of substrings based on the delimiter
console.log(str15.includes('shail'))  // it will return true if the substring is present in the string else false
console.log(str15.charAt(0))  // it will print the character at the specified index
console.log(str15.charCodeAt(0))  // it will print the unicode of the character at the specified index
console.log(str15.trim())  // it will remove the whitespace from both ends of the string
console.log(str15.startsWith('hello'))  // it will return true if the string starts with the specified substring else false
console.log(str15.endsWith('shail'))  // it will return true if the string ends with the specified substring else false
console.log(str15.repeat(2))  // it will repeat the string the specified number of times
console.log(str15.concat(' how are you'))  // it will concatenate the string with another string
console.log(str15.substr(0,5))  // it will print the substring from index 0 to 5
console.log(str15.substring(0,5))  // it will print the substring from index 0 to 5
console.log(str15.valueOf())  // it will return the primitive value of the string
console.log(str15.localeCompare('hello shail'))  // it will return 0 if the strings are equal, -1 if the string is less than the specified string, and 1 if the string is greater than the specified string
console.log(str15.match(/shail/))  // it will return an array of matches for the specified regex
console.log(str15.search(/shail/))  // it will return the index of the first match for the specified regex
console.log(str15.padStart(20,'*'))  // it will pad the string with the specified character at the start to make the string of the specified length
console.log(str15.padEnd(20,'*'))  // it will pad the string with the specified character at the end to make the string of the specified length
console.log(str15.normalize())  // it will return the normalized form of the string
console.log(str15.toString())  // it will return the string representation of the string
console.log(str15.lastIndexOf('l'))  // it will print the index of the last occurrence of the substring

// there are many more string methods available in javascript
// we can refer to the documentation for more information
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  
// https://www.w3schools.com/jsref/jsref_obj_string.asp
// https://www.javascripttutorial.net/javascript-string-methods/
// https://www.freecodecamp.org/news/javascript-string-methods-explained-with-examples/
// https://www.geeksforgeeks.org/javascript-string-methods-with-examples/
// https://www.tutorialspoint.com/javascript/javascript_string_methods.htm
// https://www.javatpoint.com/javascript-string-methods

// we can also create strings using the String() constructor
let str16=new String("hello shail")
console.log(str16)  // it will print the string object
console.log(typeof str16)  // it will print object
// but it is not recommended to use the String() constructor to create strings as it creates a string object instead of a string primitive
// it is better to use string literals or template literals to create strings
// we can convert a string object to a string primitive using the valueOf() method
let str17=str16.valueOf()
console.log(str17)  // it will print the string primitive
console.log(typeof str17)  // it will print string
// but it is better to use string literals or template literals to create strings
// as they are more efficient and easier to use

