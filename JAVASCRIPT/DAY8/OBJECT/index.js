// Objects in js
let person = {
    name: "shail",
    age: 22,
    isStudent: true,
    skills: ["html","css","js"],
    address: {
        city: "pune",
        state: "maharashtra"
    },
    greet: function(){
        console.log("Hello");
    }
};
console.log(person);
console.log(typeof person);  // object
console.log(person.name);  // shail
console.log(person['age']);  // 22
console.log(person.skills);  // ["html","css","js"]
console.log(person.address.city);  // pune
person.greet();  // Hello 

// how to delete a property from object
delete person.isStudent;
console.log(person);

// how to show keys of object
console.log(Object.keys(person));  // ['name', 'age', 'skills', 'address', 'greet']
// how to show values of object
console.log(Object.values(person));  // ['shail', 22, Array(3), {…}, ƒ]
// how to show entries of object
console.log(Object.entries(person));  // [['name', 'shail'], ['age', 22], ['skills', Array(3)], ['address', {…}], ['greet', ƒ]]

// how to iterate for in loop in object   but ye method recommended nh h 
for(let keys in person){
    console.log(keys, person[keys]);
}

// for of loop in object  ,, pr hum for of loop direct nh lga skte object k upr for of loop hum array k upr lgate h 
for(let keys of Object.keys(person)){
    console.log(keys);   // isse ye object ki jho key h wo lake dega
    
}

// for of loop agr value chahiye ho tb 
for(let values of Object.values(person)){
    console.log(values);
    
}

// object destructuring
const {name, age,greet}=person;
console.log(name,age,greet);


