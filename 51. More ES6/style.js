// for of, for in
const names = ['a', 'b', 'c'];

for (let name of names) {
    document.write(name + " ");
}

// for in, object iterator
document.write("<br>");

let students = {
    Id: 101,
    name: 'anis',
    cg: 3.91
}

for (let x in students) {
    document.write(x + " -> " + students[x] + "<br>");
}

// for each
var numbers = [10, 20, 30, 40];

for (var x = 0; x < numbers.length; x++) {
    document.write(numbers[x] + " ");
}

// parameter ekta fuction, oikhane bola lagbe ki korbo
numbers.forEach(function (x) {
    document.write(x + " ");
});

var sq = [];
numbers.forEach(function (x) {
    sq.push(x * x);
});

document.write("<br>");
document.write(sq);

// numbers er prottek er sathe 5 add kore, numbers ei rakhbo
// x value-> item access , index=index->access, ar=main array ta access
numbers.forEach(function (x, index, ar) {
    ar[index] = x + 5;
});
document.write("<br>");
document.write(numbers);


// map,filter
// ager kaj ta map diye, map new array return kore so declare lagbe na
numbers = [11, 12, 3, 14, 5]
var squareNumber = numbers.map(function (x) {
    return x * x;
});

// 10 er theke boro gula return korbe
var newNumbers = numbers.filter(function () {
    return x > 10;
});


// arrow function

// normal
function disp1() {
    console.log("I am display1");
}

// arrow
const disp2 = () => {
    console.log("I am display 2");
}

// ek line arrow fnction hole second bracket lage na , so return na dileo chole
// second bracket dile must return lagbe

const disp3 = () => "Hi i am display 3";

disp1();
disp2();
console.log(disp3());


// ekta parameter hole bracket lagbe na
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(11, 12));


var studentsDetails = [

    {
        id: 101,
        name: 'Fahad',
        cg: 3.5
    },
    {
        id: 113,
        name: 'Saju',
        cg: 3.8
    },
    {
        id: 109,
        name: 'Dihan',
        cg: 3.9
    },
    {
        id: 119,
        name: 'Han',
        cg: 3.98
    }

]
// students over 3.7 cg

function studentNames() {

    return studentsDetails.filter(function (x) {
        return x.cg > 3.6;
    }).map(function (y) {
        return y.name;
    });
}

console.log(studentNames());

// same thing with arrow function

const studentNames2 = () => studentsDetails.filter((x) => x.cg > 3.6).map((y) => y.name);
console.log(studentNames2());

// destructuring
// array destructure

var numbers = [10, 20, 30, 40, 50]
console.log(numbers[0])
console.log(numbers[1])
// bar bar emne use na kore system kora jay

var [num1, num2, num3, num4, num5] = numbers
console.log(num1);
console.log(num2);

// swap
var a = 10, b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);

//  object destructre
const stInfo = {
    id: 301,
    stName: 'shakib',
    cg: 3.45,
    language: {
        native: 'bangla',
        beginner: 'english'
    }
}

// normal
console.log(stInfo.id);
console.log(stInfo.stName);
console.log(stInfo.cg);

// destructure
const { id, stName, language } = stInfo;
console.log(stName);
console.log(id);
console.log(language.native);

// destructuring function parameters


// normal
const employeeInfoN = (employee) => {
    console.log(`${employee.id} -> ${employee.fullname}`)
}

// destructure
const employeeInfo = ({ id, fullname }) => {
    console.log(`${id} -> ${fullname}`);
}

const employee = {
    id: 101,
    fullname: 'rahat'
}

employeeInfo(employee);