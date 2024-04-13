// normal fn 'this' binding depends on how fn is invoked, not where it is defined
// arrow fn 'this' depends on parent enclosing  (normal) function otherwise undefined


// // // finding element in DOM;
// // const btn = document.getElementById('submitBtn');
// // // const btn = document.getElementsByClassName('btn')


// // btn.addEventListener("click",()=>{
// //     alert('btn clicked')
// // });

// // console.log('started');
// // setTimeout(() => {
// //     console.log('Time Over!!!');
// // }, 3000);

// // setTimeout(() => {
// //     console.log('Time Over!!!');
// // }, 0);
// // console.log('first');
// // console.log('second');
// // console.log('third');



// // const URL = 'https://jsonplaceholder.typicode.com/users/1';

// // const responsePromise = fetch(URL);
// // console.log("🚀 ~ responsePromise:", responsePromise);

// // responsePromise.then((data)=>{
// //     console.log(data)
// //     data.json().then(userData => {
// //         console.log("🚀 ~ data.json ~ userData:", userData);
// // });
// //     })


const myPromise = new Promise((resolve,reject)=>{
    // resolve("MyPromise resolved")
    reject("network Error");
});

// myPromise.then(data=>{
//     debugger
//     console.log('successful',data)
// }).catch((err)=>{
//     debugger
//     console.log('.catch callback',err)
// });
// setTimeout(() => {
//     debugger
//     console.log('timeout');    
// }, 0);

const URL = 'https://jsonplaceholder.typicode.com/users/1';

// fetch(URL).then(data=>{
//     debugger
//     console.log(data);
//     data.json().then(userData=>{
//         debugger
//         console.log("Network response", userData);
//     });
// });

// console.log('first');
// myPromise.then(data=>{
//     debugger
//     console.log(data)
// });
// console.log('second');
// console.log('third');
// debugger


// const fetchData = async () => {
//     try {
//         console.log("🚀 ~ fetchData ~ network req initiated")
//         const data = await fetch(URL);
//         console.log("network data fetched")
//         await myPromise;
//         const userData = await data.json();
//         console.log("🚀 ~ fetchData ~ userData:", userData)   
        
//     } catch (error) {
//         console.log(error);
//     } finally{
//         console.log("always going to execute")
//     }
//     // fetch(URL).then(data=>console.log(data));
//     // const variableName = await promiseName;
// };

(async () => {
    try {
        console.log("🚀 ~ fetchData ~ network req initiated")
        const data = await fetch(URL);
        console.log("network data fetched")
        await myPromise;
        const userData = await data.json();
        console.log("🚀 ~ fetchData ~ userData:", userData)   
        
    } catch (error) {
        console.log(error);
    } finally{
        console.log("always going to execute")
    }
})();

// IIFE - immediately invoked fn expression

// const fn = ()=>{
//     console.log("fn invoked");
// };
// fn();
//         invocation   
// ( fn body )()  
// (()=>{
//     console.log("fn invoked");
// })();


// // console.log("🚀 ~ name:", name)
// // console.log("🚀 ~ name:", name)
// // // object destructing, assignment, renaming
// // // IIFE
// // // ASYNC AWAIT
// // // Exception Handling
// // // ES6 classes, this keyword

// // const [a, b] = [1, 2, 3, 4, 5];

// // const employee = {
// //     name: "Nikhil",
// //     id: 101,
// //     dept: {
// //         depName: "Engg",
// //         depId: "E101",
// //         address: {
// //             pinCode: 123456
// //         }
// //     },

// // };
// // console.log("🚀 ~ employee.somethingElse:", employee.somethingElse)

// // // const name = employee.name;

// // // Object destructing assignment

// // // const { name, id, dept } = employee;

// // // const { depName, depId } = dept,
// // const { name, id, dept: { depName, depId, address: { pinCode } } } = employee;

// // // const fn = (user)=>{

// // const fn = ({name, id, somethingElse})=>{
// //     // const {name, id} = user
// //     // console.log(user.name)
// //     // console.log(user.id)
// //     console.log(name)
// //     console.log(id)
// // };


// // fn(employee);
// // const obj = {
// //     id,
// //     name
// // };
// // fn(obj)
// // // 43-47
// // fn({id, name});


// const employee = {
//     name: "Nikhil",
//     id: 101,
//     dept: {
//         depName: "Engg",
//         depId: "E101",
//         address: {
//             pinCode: 123456
//         }
//     },

// };


// // const { name } = empName;
// // const empName = employee.name;

// const { name: empName, dept: { address: employeeAddress } } = employee;

// // exception handling

// // gracefully handling errors
// try {
//     console.log("🚀 ~ name:", name);
// } catch (error) {
//     console.log('caught', error);
// }

// console.log("🚀 ~ empName:", empName);
// console.log("🚀 ~ employeeAddress:", employeeAddress);


// // async await

// const URL = 'https://jsonplaceholder.typicode.com/users/1';

// // fetch(URL).then(data=>{
// //     console.log(data);
// //     data.json().then(userData=>{
// //         console.log("Network response", userData);
// //     });
// // });
// // return new Promise((res,rej)=>{
// //     fetchFromDB.then(data=>{
// //         console.log(data);
// //     validation(data)
// //         updateDB().then(updatedData=>{
// //             res(updatedData)
// //         })
// //     });
// // })

// //     data.json().then(userData=>{
// //         console.log("Network response", userData);
// //     });
// // });
// const myPromise = new Promise((resolve,reject)=>{
//     // resolve("MyPromise resolved")
//     reject("network Error");
// });
// const fetchData = async () => {
//     try {
//         console.log("🚀 ~ fetchData ~ network req initiated")
//         const data = await fetch(URL);
//         console.log("network data fetched")
//         await myPromise;
//         const userData = await data.json();
//         console.log("🚀 ~ fetchData ~ userData:", userData)   

//     } catch (error) {
//         console.log(error);
//     } finally{
//         console.log("always going to execute")
//     }
//     // fetch(URL).then(data=>console.log(data));
//     // const variableName = await promiseName;
// };

// fetchData();



// const employee = {
//     name: "Nikhil",
//     id: 101,
//     dept: {
//         depName: "Engg",
//         depId: "E101",
//         address: {
//             pinCode: 123456
//         }
//     },
//     test(){

//     },
//     greet:  function() {
//         console.log("🚀 ~ employee.greet:")
//         console.log(`Hello, my name is ${this.name}`);
//         const greetArrowFn =   ()=> {
//             console.log("🚀 ~ greetArrowFn inside normal fn:")
//             console.log(`Hello, my name is ${this.name}`)
//         };
//         greetArrowFn();
//     },
//     greetArrowFn:  ()=> {
//         console.log("🚀 ~ greetArrowFn:")
//         console.log(`Hello, my name is ${this.name}`)
//     }
// };
// const employee2 = {
//     name: "test",
//     id: 102,
// };

// employee.greet.call(employee2);

// const greetOutside = function(){
//     console.log("🚀 ~ greetOutside ~ greetOutside:")
//     console.log(this.name)
// }

// const obj1 = {
//     name:"obj1",
//     greet(){
//         // this = obj2
//         console.log(this.name)
//     }
// }
// const obj2 = {
//     name:"obj2",
// }
// // this = obj1
// obj1.greet();
// // explicityly set this = obj2
// // fn.call();

// obj1.greet.call(obj2);
// greetOutside.call(obj2);
// // employee.greetArrowFn()


class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    };

    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
};

class Manager extends Employee {

    constructor(name, id, dept) {
        super(name, id);
        this.dept = dept;
    };

    greet() {
        console.log(`Hello, my name is ${this.name} and I manage ${this.dept} dept.`);
    }
}

const employeeClass = new Employee("Nikhil", 101);
employeeClass.greet();

const manager = new Manager("test", 102, "Engg.");
manager.greet();
