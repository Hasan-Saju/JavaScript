// use of callback and higher order function
// eikhane asychronous use korbo but chai load complete howar age onno kaj korbo na


const taskOne = (callback) => {
    console.log("task 1");
    callback();
}

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log("task 2. Data loading.");
        callback();
    }, 3000);
}

const taskThree = (callback) => {
    console.log("task 3");
    callback();
}

const taskFour = (callback) => {
    console.log("task 4");
    callback();
}

const taskFive = () => {
    console.log("task 5");
}

/*
taskOne(function f1() {
    taskTwo(function f2() {
        taskThree(function f3() {
            taskFour(function f4() {
                taskFive();
            });
        });
    });
});
*/

// anonymous function
taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            });
        });
    });
});
