
// // //   datatypes
// // //   primitive

// // //       null
// // //       undefined 
// // //       boolean
// // //       number
// // //       float
// // //       strings - template strings
// // //   objects 
// // //       object
// // //       arrays - map filter reduce, rest, spread operator
// // //       date

// // //   ES6 Classes


// // //   promises

// // //   js in single threaded - only one thing will be processed at a time

// // //   var, let , const;

// // //   scoping in js

// //  var n = 10;   //function scoped, hoisted
// // //   let, const  block scoped

// //  const name = 'Nikhil';
// //  let num = 123;

// //  num = 345;
// //  console.log(num);
// //  console.log("🚀 ~ num:", num)

// // //  global scope

// //  {
// //     //   parent scope
// //      let name = 'xyz';
// //      console.log(name);
// //      {
// //         //   block 2
// //          console.log(name);
// //      }
// //  }

// // //   {} branckets
// // //   () parenthesis
// //  function greet(name) {
// //      console.log('hello',name);
// //  }

// //  console.log("🚀 ~ add(1,2,3) gloabl", add(1,2,3));


// //  function add(num1, num2, num3){ 
// //       var result (undefined)
// //      console.log("🚀 ~ add ~ result:", result)
// //      {
// //          var result = num1+num2+num3;
// //      }
// //      console.log("🚀 ~ add ~ result:", result)

// //      return result;
// //  }

// //  let anyVar;
// //  console.log("🚀 ~ anyVar:", anyVar)

// //  let amount = 1_00_00_000;
// //  amount = 10000000;
// //  console.log("🚀 ~ amount.toLocaleString(en-IN):", amount.toLocaleString("en-IN"));
// //  console.log("🚀 ~ amount.toLocaleString(en-US):", amount.toLocaleString("en-US"));

// //  console.log("🚀 ~ amount/0:", -amount/0);


// //  let string = "Hello World";
// //   console.log("🚀 ~ string[100]:", string[100])

// //  console.log("🚀 ~ string.indexOf('Hello'):", string.indexOf('Hello'))
// //  console.log("🚀 ~ string:", string.substring(0,5))  //substring between 0-4 last index is not included;

// // //   string are immutable in js

// //  let empName = 'john smith';
// //  let newEmpName = empName.toUpperCase();

// //  console.log("🚀 ~ empName:", empName);
// //  console.log("🚀 ~ newEmpName:", newEmpName);

// //  const companyName = 'Apple';
// //  empName[0] = 'x';

// //  console.log("🚀 ~ empName:", empName);

// // //   template strings

// //  console.log('Hello'+ empName + '. Welcome to' + companyName + '.');
// //  console.log(`Hello ${empName}. Welcome to ${companyName}`);
// //  console.log(`sum of 1,2,3 is ${1+2+3}`);
// //  console.log(`sum of 1,2,3 is ${add(1,2,3)}`);


// //  let balance = 100;
// //  let addAmount = '100.75';
// //  console.log("🚀 ~ balance+addAmount:", balance+parseFloat(addAmount))
// // //   converting a valid numeric string to number;
// //  const addAmountNum = +addAmount;
// //  console.log("🚀 ~ addAmountNum:", addAmountNum);

// //   undefined
// //   null

// //  let loggedUserName = "abcd";
// //  loggedUserName = '';

// //  if(loggedUserName){
// //      console.log(`Welcome ${loggedUserName}`)
// //  }

// // //   boolean - true false 
// //   truthy, falsy

// // //   truthy - anything other than falsy  [](empty array), {}(empty Object) is not falsy its truthy 
// // //   falsy - values which be evaluated as false
// //  let falsy = '';
// //  falsy = 0;
// //  falsy = null
// //  falsy = undefined
// //  falsy = NaN
// // //   [], {} is not falsy its truthy

// //  if(falsy){
// //      console.log('truthy')
// //  } else{
// //      console.log("🚀 ~ falsy:", falsy)
// //  }


// // //  equality operator ==, === 

// // //  == only checks the value
// // //  stricty equality operator, checks both dataType and value
// // //  ! boolean not operator true -> false , false-> true
// //  console.log(10 == '10')   // true
// //  console.log(10 === '10')   // false
// //  console.log(10 != '10')   // false
// //  console.log(10 !== '10')   // false LHS->number , RHS-> string

// // //  !(expression)

// // //  IEEE standard
// // // console.log(NaN !== NaN);

// // //  && Logical AND
// // //  || Logical OR
// // // JS bitwise opeators
// // //  ~ | & ^


// // // // -------------------------------------------------------------------------

// // // // Array, -> methods
// // // // Objects, -> methods
// // // // Arrow Fn,
// // // // Objects vs primitives (copy by value/reference)
// // // // ES6 class
// // // // IIFE
// // // // setTimeout
// // // // Promises

// // // // hetrogenous in js

// const arr = [1, 2, 3];
// arr.push(5)

// // // arr = [1,2,3,4] // not allowed;
// // arr[100]
// // console.log("🚀 ~ arr[100]:", arr[100]);

// // // pop removes the last item
// // // push inserts the item at last
// // // splice, //remove, insert
// // // includes
// // // find() //cb
// // // forEach map, filter reduce // cb
// // console.log("🚀 ~ arr.indexOf(100):", arr.indexOf(100));

// // // arr.splice(1,2) // [2]
// // // console.log("🚀 ~ arr.splice(1,2):", arr.splice(1,2),arr)
// // // console.log("🚀 ~ arr.splice(1,1):", arr.splice(1,1))

// // console.log("🚀 ~ arr.splice(3,0,4):",arr.splice(3,0,"element to insert-4"), arr);
// // // traversals

// function fun1(callback) {
//     console.log("fn1");
//     console.log(callback);
//     callback();
// };


// function fun2() {
//     console.log("fn2");
// };

// const num = 1
// fun1(fun2);

// // function traverse(value){
// //     console.log("🚀 ~ traverse ~ value:", value)
// // };

// const traverse = (value, index, arr) => {
//     console.log("🚀 ~ traverse ~ value:", value, index, arr);
//     return value
// };

// // const multiplyBy2  = (val)=>{
// //     return val*2
// // }
// // only for single params
// const multiplyBy2 = val => val * 2

// // const sum = (num1,num2,num3)=>num1+num2+num3;


// arr.forEach((value, index, arr) => console.log(value, index, arr));

// // ForEach internal working
// // callback(value,index,arr)
// // /**
// //  * traverse(1,0,[1,2,3,5])
// //  * traverse(2,1,[1,2,3,5])
// //  * traverse(3,2,[1,2,3,5])
// //  * traverse(5,3,[1,2,3,5])
// //  * 
// //  *  */
// // //81 % 10 modulo 1

// const nums = [1, 2, 3, 4, 5];
// const squareNums = nums.map(val => val ** 2);
// // console.log("🚀 ~ squareNums:", squareNums);

// // const oddNums = squareNums.filter(val => val % 2);
// // console.log("🚀 ~ oddNums:", oddNums)
// // // takes each value of arr one by one and executes the cb with that value

// // // const squareOddNums = nums.map(val=>val**2).filter(val=>val%2);
// // const squareOddNums = nums.filter(val => val % 2).map(val => val ** 2);
// // console.log("🚀 ~ squareOddNums:", squareOddNums);
// // // 
// // console.log("🚀 ~ sum ~ nums:", nums)
// // const sum = nums.reduce((accumulator, curr) => {
// //     console.log("🚀 ~ sum ~ prev,curr, accumulator+curr:", accumulator, curr, accumulator+curr)
// //     return accumulator + curr
// // });
// // const betterSum = nums.reduce((accumulator, curr) => accumulator + curr );
// // const product = nums.reduce((product,curr)=>product*curr);

// // console.log("🚀 ~ product:", product)
// // console.log("🚀 ~ sum ~ sum:", sum)
// // // const SumSquaredOddNums = 

// // // reduce

// const arr2 = [6,7,8,9,10];
// // spread operator
// const combined = [...nums,...arr2,...squareNums]  //[1-10]
// console.log("🚀 ~ combined:", combined);

// // rest operator
// const [one, two, ...rest] = nums;

// // console.log(one, two,,elem) = num
// // console.log("🚀 ~ rest:", rest);
// // [1,2,3,4,5]
// const [,,a,,b,c] = nums;
// console.log("🚀 ~ a,,b:", a,b,c);


// sumN = (...params)=>console.log(params);

// sumN(1) // sumN([1])
// sumN(1,2) // sumN([1,2])
// sumN(1,2,3,4,5) // sumN([1,2,3,4,5])
// sumN(...nums);
// // sumN(1,2,3,4,5) same as sumN(...nums) // sumN([1,2,3,4,5]);

// const fn = (p1, p2, ...params)=>{
//     console.log("🚀 ~ fn ~ p1, p2, params:", p1, p2,params)
// }

// fn("a","b",1,2,3,4,5);

// console.log("🚀 ~ nums:", ...nums)


// 
// pass by value
// primitives only the value is assigned
// number
// string, boolean, number , anything other than obj, fun, arrays


let num1 = 1;
let num2 = num1; //1
num1 = 3;

// console.log("🚀 ~ num2:", num2)

// pass by reference
const arr1 = [1,2,3,4,5];

// shallow copy of arr
const arr2 = [...arr1];
arr1.push(6);
console.log("🚀 ~ arr1:", arr1)
console.log("🚀 ~ arr2:", arr2)

const arr = [1,2,[3,4]];

const shallowCopyArr = [...arr];
shallowCopyArr[2] = [...arr[2]];

arr[0] = 999;

arr[2][0] = 0;
console.log("🚀 ~ arr:", arr)  // [999,2,[0,4]]
console.log("🚀 ~ shallowCopyArr:", shallowCopyArr) // // [1,2,[0,4]]


const employee = {
    name:"Nikhil",
    id:101,
    dept: {
        name:"Engg",
        id:"E101"
    }
};

const employee2 = {
    ...employee
}

employee2.name ="abcd";
employee2.dept.name ="Accounting";

employee.name = "Nikhil Sharma";

console.log("🚀 ~ employee:", employee);
