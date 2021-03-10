// test 2 er modified version
// instead of nested callback using promise

console.log("welcome");

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve("task 1 is completed");
    })
}

// eitar jonno wait korbe 2 sec , pore onno gula korbe
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("task 2 is completed");
        }, 2000)
    })
}

const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve("task 3 is completed");
    })
}

const taskFour = () => {
    return new Promise((resolve, reject) => {
        resolve("task 4 is completed");
    })
}

taskOne()
    .then((res) => console.log(res))
    .then(taskTwo)
    .then((res) => console.log(res))
    .then(taskThree)
    .then((res) => console.log(res))
    .then(taskFour)
    .then((res) => console.log(res));
// .catch((err) => console.log(err));


// ekta catch e enough, shob error er jonno



console.log("bye");
