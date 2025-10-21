let arr =[1,2,3,4,5];
let Array = [10,20,"shail",true,null,undefined,[1,2,3],{name:"shail",age:22}]; // array can contain different data types it is a heterogeneous data structure   
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));  // true
console.log(arr.length);  // 5
console.log(arr[0]);    
console.log(arr[4]);
console.log(arr[arr.length-1]);  // last element
console.log(arr.push(6));  // adds 6 at the end and returns new length
console.log(arr);
console.log(arr.pop());  // removes last element and returns it
console.log(arr);
console.log(arr.unshift(0)); // adds 0 at the beginning and returns new length
console.log(arr);
console.log(arr.shift());  // removes first element and returns it
console.log(arr);
console.log(arr.indexOf(3));  // 2
console.log(arr.indexOf(10));  // -1
console.log(arr.includes(3));  // true
console.log(arr.includes(10));  // false
console.log(arr.reverse());  // [5,4,3,2,1]
console.log(arr);
console.log(arr.join());  // "5,4,3,2,1"
console.log(arr.join(''));  // "54321"
console.log(arr.join('-'));  // "5-4-3-2-1"
console.log(arr.slice(1,4));  // [4,3,2]  from index 1 to index 4 (4 not included)
console.log(arr.slice(1));  // [4,3,2,1]  from index 1 to end
console.log(arr.slice(0,arr.length));  // [5,4,3,2,1]  from index 0 to end
console.log(arr.splice(1,2));  // removes 2 elements from index 1 and returns them
console.log(arr); // [5,2,1]    
console.log(arr.splice(1,0,6,7));  // adds 6 and 7 at index 1 and returns []
console.log(arr); // [5,6,7,2,1]
console.log(arr.splice(1,2,8,9));  // removes 2 elements from index 1 and adds 8 and 9 at index 1 and returns removed elements
console.log(arr); // [5,8,9,2,1]
console.log(arr.concat([10,11,12]));  // [5,8,9,2,1,10,11,12]  does not change original array
console.log(arr);  // [5,8,9,2,1]
console.log(arr.sort());  // [1,2,5,8,9]  sorts array in ascending order        
console.log(arr);  // [1,2,5,8,9]
console.log(arr.sort((a,b)=>b-a));  // [9,8,5,2,1]  sorts array in descending order
console.log(arr);  // [9,8,5,2,1]   
let arr2 = arr.map((x)=>x*2);  // creates new array by multiplying each element by 2
console.log(arr2);  // [18,16,10,4,2]   
console.log(arr);  // [9,8,5,2,1]
let arr3 = arr.filter((x)=>x%2==0);  // creates new array with even numbers
console.log(arr3);  // [8,2]   
console.log(arr);  // [9,8,5,2,1]
