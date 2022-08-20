// Template Literals
var mathsMark = '99';
var engMark = '75';
var langMark = '70';

// Maths: 99 English: 75 Language: 70

// Old Approach
// console.log("Maths: " + mathsMark + " English: " + engMark + " Language: " + langMark);

// New Approach
// console.log(`Maths: ${mathsMark} English: ${engMark} Language: ${langMark}`);

// var obj = {
//   name: "Sanjay",
//   role: "Developer",
//   company: 'xxxxx',
// }

// Sanjay is a developer working at xxxxx
// console.log(`${obj.name} is a ${obj.role} working at ${obj.company}`);


// var firstName = "Sam", age = 30, origin = 'Asian';

// var personObj = {
//   firstName, // firstName: "Sam"
//   age, // age: 30
//   origin, // origin: 'Asian'
// }
// console.log(personObj);



// Destructuring

// Array ( Order Matters a lot )
const arr = [1, "Sam", 4, false, 100];

//var name = arr[1];

var [, , num] = arr;

//console.log(name, num);

var [a, b, , , c, d] = [1, 2, 3, 4, 5, 6]

console.log(a, b, c, d);

// Rest Operator

var [a, b, ...restArr] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(a, b, restArr);


// Object Destructuring ( order does not matter, only key matters )
// Object Destructuring
var objSample = { firstName: "Sam", dob: 'yyyy-mm-dd', nationality: 'Indian' }

// var { firstName, nationality, lastName, dohkhk } = objSample;

// console.log(firstName, nationality, lastName, dohkhk);

// Rest
var { a, c, ...restObj }
  = { a: 100, b: 200, c: 400, d: 10000 };

console.log(a, c, restObj);


// spread
// array
var arrOfMarks = [100, 70, 30, 40];


// newArr should be --> [100, 70, 30, 40, 99, 56, 78];
// 99, 56, 78
var newArr = [...arrOfMarks, 99, 56, 78];


// newArrTwo should be --> [ 99, 56, 78, 100, 70, 30, 40];
var newArrTwo = [99, 56, 78, ...arrOfMarks];

console.log(newArr);
console.log(newArrTwo);


// Object

var stuObj = { firstName: 'Sam', class: 10, section: 'A' }

// stuObj b+, rollNo ---> newStuObj ---> { firstName: 'Sam', class: 10, section: 'A', blood: 'b+ , rollNo: 51}

var newStuObj = { ...stuObj, blood: 'b+', rollNo: 51 };

console.log(newStuObj);

// stuObj b+, rollNo ---> newStuObj ---> {blood: 'b+ , rollNo: 51, firstName: 'Sam', class: 10, section: 'A'}
var newStuObjTwo = { blood: 'b+', rollNo: 52, ...stuObj };
console.log(newStuObjTwo);









