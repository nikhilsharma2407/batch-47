// // finding element in DOM;
// const btn = document.getElementById('submitBtn');
// // const btn = document.getElementsByClassName('btn')


// btn.addEventListener("click",()=>{
//     alert('btn clicked')
// });

// console.log('started');
// setTimeout(() => {
//     console.log('Time Over!!!');
// }, 3000);

// setTimeout(() => {
//     console.log('Time Over!!!');
// }, 0);
// console.log('first');
// console.log('second');
// console.log('third');



// const URL = 'https://jsonplaceholder.typicode.com/users/1';

// const responsePromise = fetch(URL);
// console.log("🚀 ~ responsePromise:", responsePromise);

// responsePromise.then((data)=>{
//     console.log(data)
//     data.json().then(userData => {
//         console.log("🚀 ~ data.json ~ userData:", userData);
// });
//     })


const myPromise = new Promise((resolve,reject)=>{
    // resolve("MyPromise resolved")
    reject("network Error");
});

myPromise.then(data=>{
    debugger
    console.log('successful',data)
}).catch((err)=>{
    debugger
    console.log('.catch callback',err)
});
setTimeout(() => {
    debugger
    console.log('timeout');    
}, 0);

const URL = 'https://jsonplaceholder.typicode.com/users/1';

fetch(URL).then(data=>{
    debugger
    console.log(data);
    data.json().then(userData=>{
        debugger
        console.log("Network response", userData);
    });
});

console.log('first');
myPromise.then(data=>{
    debugger
    console.log(data)
});
console.log('second');
console.log('third');
debugger
