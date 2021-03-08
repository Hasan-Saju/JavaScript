var x=6;
if(true)
{
    var x=5;
}
document.write("hello<br>");
document.write(x);
// 5 print korbe



// var declare
let y=6;
if(true)
{
    let y=5;
}
document.write(y);
// 6 print korbe, let oi scope er moddhei thake

// constant
const z=11;
// ar change kora jabe na


// concat and print
 let a=10,b=20;
 let sum=a+b;

 document.write(`<br>Sum is: ${a+b}. <br>The End`);

 let nam="Hasan Saju";
 let msg=`I am ${nam}. I am learning JS<br>`;
 document.write(msg);

//  function
const add=(x,y) =>{
    return x+y;
}

let c=11;
// document.write(typeof(c));
document.write(add(c,c));

// hoisting and strict mode
f=20;
document.write(f);
var f;
// let f possible na, const o possible na
// it's possiblee in js, using a variable without declaring it ;


/*
"use strict"
e=20;
*/
// eita ar kaj korbe na , cz strict mode activated

// default and rest parameter
// default
const message=(text="this is a default parameter")=>{
    document.write(`<br>${text}<br>`);
}

/*
function message(text="this is a default parameter")
{
    document.write(`<br>${text}<br>`);   
}
*/

message("I love js");
message();

// rest
// 3 dot
function show(x,y,...z){
    document.write(`x=${x}, y=${y}, z=${z}`);
}

show(11,12,14,15,16);

// spread operator
function addNumbers(x,y,z)
{
    return x+y+z;
}

numbers=[1,2,3];
document.write("<br>spread<br>");
document.write(addNumbers(...numbers));

numbers1=[5,6,...numbers];
document.write("<br>");
document.write(numbers1);

numbers1=[5,...numbers,6];
document.write("<br>");
document.write(numbers1);
// rest just last a use kora jay, spread shob jaygay use kora jay

 
n1=[1,2,3]
n2=[4,5,6]
//n=n1.concat(n2);
n=[...n1,...n2];
document.write(`<br>${n}`);

// object concat with spread

p1={
    name:'Saju',
    age:21
}
p2={
    nationality: "Bangladeshi",
    occupation:'teacher'
}

p={...p1,...p2};
console.log(p);     //concated object

// object literals
function studentInfo(name,age){
    return{
        // name:name,
        // age:age 
        // same thing 
        name,
        age 
    }
}
console.log(studentInfo('hs',11));

// consize method

msg={
    body:function()
    {
        return 'Hi, I am function inside msg object';
    }
}
console.log(msg.body());

// same thing
msg={
    body(){
        return 'Hi, I am function inside msg object';
    }
}
console.log(msg.body());

// function er namer majhe space diyeo es6  a function banano jay

msg={
    'body name'(){
        return 'Hi, I am function with space inside msg object';
    }
}
console.log(msg['body name']());
