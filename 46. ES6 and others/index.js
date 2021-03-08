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