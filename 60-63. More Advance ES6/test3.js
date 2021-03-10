// promise and async
// promise callback er moto but aro easy and clean

console.log("Welcome");

// how to create a promise - pending, resolve,reject
const promise1 = new Promise((resolve, reject) => {

    let completedPromise = true;
    if (completedPromise) {
        resolve("Completed promise 1");
    }
    else {
        reject(new Error("not completed promise 1"));
    }
});

const promise2 = new Promise((resolve, reject) => {
    resolve("completed promise 2");
});

// console.log(promise1);
// promise complete hole then noile catch
/*
promise1.then((res) => {
    console.log(res);
})
    .catch((err) => {
        console.log(err);
    });

promise2.then((res) => {
    console.log(res);
});
*/


// onekgula promise ek sathe run kora jay

Promise.all([promise1, promise2])
    .then((res) => {
        console.log(res);
    });
console.log("end");


// race
/*
const promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Completed promise 1");
    }, 2000);

});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Completed promise 2");
    }, 1000);
});


// promise.all shobar response dekhabe
// but promise.race jar kaj age shesh korbe take shudhu dekhabe

Promise.race([promise1, promise2])
    .then((res) => {
        console.log(res);
    });
console.log("end");
// eikhane Completed promise 2 , dekhabe karon eita age shesh hoy
*/

// then(([res1,res2])), destructuring o possible
// promise asynchronous cz welcome erpor end houise, pore majher gula hoise