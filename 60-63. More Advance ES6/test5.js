// async await
// promise(test 4) er then gula ke replace korai holo async await er kaj
// asynchronous kaj ke synchronous way te kora

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

/*
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

*/

// await call korle must fnction ta async howa lagbe
// await mane hocche oita complete howar age next tay jabe na

async function callAllTasks() {
    try {
        const t1 = await taskOne();
        console.log(t1);
        const t2 = await taskTwo();
        console.log(t2);
        const t3 = await taskThree();
        console.log(t3);
        const t4 = await taskFour();
        console.log(t4);
    } catch (err) {
        console.log(err);
        // for handling error
    }
}
/*
// es6
const callAllTasks = async () => {
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
}
*/
callAllTasks();

console.log("bye");


