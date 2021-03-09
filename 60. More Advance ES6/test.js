// synchronous, asynchronous js

// synchronous, js by default synchronous(single thread programming bole)
// ekta complete howar por arektay move korbe




// asynchronous a ekta kaj a beshi time lagbe so 
// oitar jonno wait korbe na , onno kaj a move korbe, multi thread

const taskOne = () => {
    console.log("task 1");
}

// so data load er jonno eita baki shobar kaj o thamaya rakhbe

const taskTwo = () => {
    setTimeout(() => {
        console.log("task 2.let eikhane Data loading hoy");
    }, 2000);
}
// set Timout(asynchronous function) deway task 2 er jonno boshe thake nai, 3 execute hoye gese
// last a asynchronous load hobe

const taskThree = () => {
    console.log("task 3");
}

taskOne();
taskTwo();
taskThree();

// call back and higher order functions

function square(x) {
    console.log(`square of ${x}: ${x * x}`);
}

square(5);

// y ar square same ekhon
const y = square;
y(5);

// function arekta function parameter hishebe use korle param ke callback bole
// ar function ta ke higher order function bole

function higherOrderFunction(number, callback) {
    callback(number);
}

higherOrderFunction(6, square)
