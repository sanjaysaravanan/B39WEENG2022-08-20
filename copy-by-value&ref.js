// function sampleFunc(num) {
//   if(num === 2) {
//     console.log("Line 4");
//   	return true;
//     console.log("Line 5"); // redundant statement which will never execute
//   }
//   console.log("Line 7");
//   console.log("Line 8");
// }

// sampleFunc(2);


// types of functions
// function key function
// function display() {
//   console.log("Hello");
// }


// function expression
// var display = function () {
//   console.log("Hello");
// }

// arrow function
var display = () => {
  console.log("Hello");
}

// invoking/calling the function
display();


// Global Scope
// var a = 20;
// var b = 30;

// Copy by Value --> passing primitive type a params ( does not affect the global scope / Only affects local/block/function scope )
// function sampleFunc(x, y) {
//   // function scope
//   x = 10;
//   y = 100;
// }

// primitive datatype passed as params
// sampleFunc(a, b);

// console.log(a, b);

// var arr = [0, 1, 2, 3, [4, 5, 6]];



// 
// var arrGlobal = [1, 2, 3, 4, 5];

// // Copy by reference ---> passing a composite type as a parameter
// function sampleFuncRef(arrLocal) {
//   // arrLocal = [6, 7, 8];
//   arrLocal[3] = "Some Content";
// }

// sampleFuncRef(arrGlobal);

// console.log(arrGlobal);


// var globalObj = {
//   firstName: 'Sanjay',
//   lastName: 'Saravanan'
// }

// function sampleObjFunc(localObj) {
//   localObj = { firstName: 'Sam', lastName: 'Danny' }
// }

// sampleObjFunc(globalObj);

// console.log(globalObj);

// var x = 100;

// // a block scope
// function sampleFunc() {
//   var x = 20000;
// }

// sampleFunc();

// console.log(x);


// var x = 100;

// // a block scope just blocking the scope
// {
//   var x = 20000;
// }
// console.log(x);

// var x; //declaration
// x = 100; // initialization
// var x = 100; // declaration & initialization

// var xVar = 1000; // is global/function scope variable

// let xLet = 1000; // is completely a block( {} ) scope variable

// const xConst = 100; // block scoped

// xVar = 99999;

// console.log(xVar);

// xLet = 88888;

// console.log(xLet);

// xConst = 7777; // not possible to reinitialize a const variable
// console.log(xConst);

// Sample Output Problems
// Problem 1
var x = 1;

{
  var x = 200;
}

console.log(x); // 200


// Problem 2
let y = 1;

{
  let y = 8;
}

console.log(y); // 1

// Problem 2.1
let j = 1;

{
  j = 8;
}

console.log(j); // 8


// Problem 3
var z = 3;

function sample() {
  var z = 100;
}
sample();
console.log(z);// 3

// Problem 4
let p = 5;
function sampletwo() {
  p = 7;
}
sampletwo();
console.log(p);// 7


// Problem 5
let q = 20;
function sampleThree() {
  let q = 30;
}
sampleThree();
console.log(q);




