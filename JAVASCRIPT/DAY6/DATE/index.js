// DATE AND TIME

let date = new Date();
console.log(date);  // current date and time
console.log(typeof date);  // object
console.log(date.toString());  // current date and time in string format INDIA standard time
console.log(date.toDateString());  // current date in string format
console.log(date.toTimeString());  // current time in string format
console.log(date.toISOString());  // current date and time in ISO format
console.log(date.toUTCString());  // current date and time in UTC format
console.log(date.toLocaleString());  // current date and time in local format
console.log(date.toLocaleDateString());  // current date in local format
console.log(date.toLocaleTimeString());  // current time in local format
console.log(date.getFullYear());  // current year
console.log(date.getMonth());  // current month (0-11)
console.log(date.getDate());  // current date (1-31)
console.log(date.getDay());  // current day (0-6) 0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday
console.log(date.getHours());  // current hours (0-23)
console.log(date.getMinutes());  // current minutes (0-59)
console.log(date.getSeconds());  // current seconds (0-59)

