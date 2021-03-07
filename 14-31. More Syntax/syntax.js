// if-else
var x=0;

if(x>0)
document.write("Positive");
else if(x<0)
document.write("Negative");
else 
document.write("Zero");


document.write("<br>");

// switch

var dig=6;
switch(dig)
{
    case "0":
        document.write("Zero");
        break;
    case "1":
        document.write("One");
        break;
    case "2":
        document.write("Two");
        break;
    case "3":
        document.write("Three");
        break;
    case "4":
        document.write("Four");
        break;
    case "5":
        document.write("Five");
        break;
    default:
        document.write("Getter than five");
        
}

document.write("<br>");

// for loop

for(var x=1;x<=5;x++)
{
    document.write("<h1>Bangladesh</h1><br>");
}

document.write("<br>");

// while loop

var x=1;
while(x<=10)
{
    document.write(" "+x);
    x++;
}

document.write("<br>");

// do while
var temp=1;
do
{
    document.write(" "+temp);
    temp++;
}while(temp<=10);

document.write("<br>");

// we can use break and continue


// ternary operator

var number=6;
var result= number>0 ? "positive":"negative";
document.write(result);

document.write("<br>");

var number=0;
var result= number>0 ? "positive": number<0? "negative":"zero" ;
document.write(result);


document.write("<br>");

//function

function multi(num1,num2)
{
    var sq=num1*num2;
    return sq;
}

var m=multi(7,8);
document.write("<br>Multiplication: "+m+"<br>");


// array

var names=new Array(50);
var names=new Array();//eitaw ok

names[0]="Saju";
names[1]="Afnan";
names[2]="Dihan";

document.writeln(names[2]);
document.writeln("<br>whole array<br>");
document.writeln(names);
document.write(names.length)

var names=["Saju","Hasan","Raju","Hossain"];
names.push("Rahat");
names.pop();

document.write("<br>");

var country1=["Bd","Ind"];
var country2=["Pk","USA"];
var country=country1.concat(country2);
document.write(country);


/*
var num=new Array();

for(var i=0;i<5;i++)
{
    num[i]=parseInt(prompt("Enter a number: "));
}

var sum=0;
for(var i=0;i<5;i++)
{
    sum+=num[i];
}
*/

document.write("<br>");

// shift , unshift, splice, sort,reverse

var country=["BD","IND","PAK","USA","UK"];
document.write(country);
// shift shamne theke element remove 
country.shift();
document.write("<br>");
document.write(country);

// unshift shamne element add kore
country.unshift("BD");
document.write("<br>");
document.write(country);

// splice can add or remove elements
// 1st parm- pos, 2nd- how many dlt, erpor - ja ja add tata dibo
country.splice(1,0,"AUS","NZ","IRE","ABC","AM");
document.write("<br>");
document.write(country);

country.splice(1,2);
document.write("<br>");
document.write(country);

// slice 
// 1st param start ,2nd param end
// 1st theke 2nd porjonyo gula nibe , end exclusive
// 1 param means 1st theke otogula bad
// main array change hoy na

var c=country.slice(1,4);
document.write("<br>");
document.write(c);

// sort
var sorted=country.sort();
document.write("<br>");
document.write(sorted);

// reverse
var rev=sorted.reverse();
document.write("<br>");
document.write(rev);

// number sorting
var num=[5,7,1,4,5,9];
num=num.sort(function(a,b)
{
    return a-b;
});
document.write("<br>");
document.write(num);

// boro theke choto
num=num.sort(function(a,b)
{
    return b-a;
});
document.write("<br>");
document.write(num);


// object
var student1={
    name: "Hasan Saju",
    age:11,
    uni:"IUT"
}

document.write(student1.name+"<br>");

// constructor
// for creating template of object
// adding fnction in constructor
function Student(name,age,cgpa,language){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.language=language;

    this.display= function(){
        document.write(this.name+"<br>");
        document.write(this.age+"<br>");
        document.write(this.cgpa+"<br>");
        document.write(this.language+"<br>");
    }
}

var st=new Student("H Saju",21,3.8,["Bangla","English"]);
st.display();

// Math Object
var x=Math.sqrt(25);
x=Math.abs(-5);
x=Math.sin(60);
x=Math.pow(2,3);
x=Math.floor(2.6);
x=Math.ceil(3.1);

// .5 => UPORE ELSE NICHE
x=Math.round(3.5);
x=Math.max(3,4,5);


// random value from 0-1, 1 exclusive
x=Math.random();

// 0-5 er moddhe
x=Math.random()*6;

// 1-5 er moddhe
x=Math.floor((Math.random()*5)+1);


// Guessing game


/*


var win=0,loose=0;
for(var i=0;i<5;i++)
{
    var inp=parseInt(prompt("Guess a number in 1-5: "));
    var rand=Math.floor(Math.random()*5)+1;

    if(inp==rand)
    {
        console.log("Yow won");
        win++;
    }
    else
    {
        console.log("The random number was "+rand);
        loose++;
    }
}
document.write("You won: "+win+" times<br>");
document.write("You loose: "+loose+" times<br>");


*/

var date=new Date();
console.log(date);

var year=date.getFullYear();
console.log(year);

var month=date.getMonth();
console.log(month);

// sunday 0 , monday 1 ei rokom 
var day=date.getDay();
console.log(day);