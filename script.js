
//   datatypes
//   primitive
    
//       null
//       undefined 
//       boolean
//       number
//       float
//       strings - template strings
//   objects 
//       object
//       arrays - map filter reduce, rest, spread operator
//       date

//   ES6 Classes


//   promises

//   js in single threaded - only one thing will be processed at a time

//   var, let , const;

//   scoping in js

 var n = 10;   //function scoped, hoisted
//   let, const  block scoped

 const name = 'Nikhil';
 let num = 123;

 num = 345;
 console.log(num);
 console.log("🚀 ~ num:", num)

//  global scope

 {
    //   parent scope
     let name = 'xyz';
     console.log(name);
     {
        //   block 2
         console.log(name);
     }
 }

  export {}

//   {} branckets
//   () parenthesis
 function greet(name) {
     console.log('hello',name);
 }

 console.log("🚀 ~ add(1,2,3) gloabl", add(1,2,3));


 function add(num1, num2, num3){ 
      var result (undefined)
     console.log("🚀 ~ add ~ result:", result)
     {
         var result = num1+num2+num3;
     }
     console.log("🚀 ~ add ~ result:", result)
    
     return result;
 }

 let anyVar;
 console.log("🚀 ~ anyVar:", anyVar)

 let amount = 1_00_00_000;
 amount = 10000000;
 console.log("🚀 ~ amount.toLocaleString(en-IN):", amount.toLocaleString("en-IN"));
 console.log("🚀 ~ amount.toLocaleString(en-US):", amount.toLocaleString("en-US"));

 console.log("🚀 ~ amount/0:", -amount/0);


 let string = "Hello World";
  console.log("🚀 ~ string[100]:", string[100])

 console.log("🚀 ~ string.indexOf('Hello'):", string.indexOf('Hello'))
 console.log("🚀 ~ string:", string.substring(0,5))  //substring between 0-4 last index is not included;

//   string are immutable in js

 let empName = 'john smith';
 let newEmpName = empName.toUpperCase();

 console.log("🚀 ~ empName:", empName);
 console.log("🚀 ~ newEmpName:", newEmpName);

 const companyName = 'Apple';
 empName[0] = 'x';

 console.log("🚀 ~ empName:", empName);

  template strings

 console.log('Hello'+ empName + '. Welcome to' + companyName + '.');
 console.log(`Hello ${empName}. Welcome to ${companyName}`);
 console.log(`sum of 1,2,3 is ${1+2+3}`);
 console.log(`sum of 1,2,3 is ${add(1,2,3)}`);


 let balance = 100;
 let addAmount = '100.75';
 console.log("🚀 ~ balance+addAmount:", balance+parseFloat(addAmount))
//   converting a valid numeric string to number;
 const addAmountNum = +addAmount;
 console.log("🚀 ~ addAmountNum:", addAmountNum);

  undefined
  null

 let loggedUserName = "abcd";
 loggedUserName = '';

 if(loggedUserName){
     console.log(`Welcome ${loggedUserName}`)
 }

//   boolean - true false 
  truthy, falsy

//   truthy - anything other than falsy  [](empty array), {}(empty Object) is not falsy its truthy 
//   falsy - values which be evaluated as false
 let falsy = '';
 falsy = 0;
 falsy = null
 falsy = undefined
 falsy = NaN
//   [], {} is not falsy its truthy

 if(falsy){
     console.log('truthy')
 } else{
     console.log("🚀 ~ falsy:", falsy)
 }


//  equality operator ==, === 

//  == only checks the value
//  stricty equality operator, checks both dataType and value
//  ! boolean not operator true -> false , false-> true
 console.log(10 == '10')   // true
 console.log(10 === '10')   // false
 console.log(10 != '10')   // false
 console.log(10 !== '10')   // false LHS->number , RHS-> string

//  !(expression)

//  IEEE standard
// console.log(NaN !== NaN);

//  && Logical AND
//  || Logical OR
// JS bitwise opeators
//  ~ | & ^
