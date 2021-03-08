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
