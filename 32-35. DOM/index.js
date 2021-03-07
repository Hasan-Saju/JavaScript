// get element by id
// process 1
document.getElementById("heading1").innerHTML="Hello ";

// process 2
var myhead=document.getElementById("heading1");
myhead.innerHTML="Hello Others";

document.getElementById("para").innerHTML="Tata";


// shob h1 select korbe , indexing diye select kora lagbe
heads=document.getElementsByTagName("h1");
heads[0].innerHTML="Hello boyz";


// list return korbe, index diye access kora lagbe
grp=document.getElementsByClassName("gang");
grp[0].innerHTML="select from html class";

// get elements by,class,id,tag= query selector

// query selector
// # for id, . for class, tag er jonno nth
document.querySelector("#Query").innerHTML="Query";

// li er vitor a choosing, ekta select kore
document.querySelector("li a").innerHTML="new tutorial";


// shob h2 er list
h2=document.querySelectorAll("h2");
h2[0].innerHTML="Gang";


// on click event
function myMessage()
{
    alert('Are you sure pal? from js file...');
}

function msgPara()
{
    alert('Are you sure pal? from js file paragraph tag...');
}

function msgPara2()
{
    var sel=document.querySelector("#parad");
    sel.innerHTML="You have clicked the paragraph";
}


var selct=document.querySelector("#mil");
function pic1()
{
    selct.src="images/infantry.jpg";
}

function pic2()
{
    selct.src="images/armored.jpg";
}


/*
dom 
innerHTML -> new HTML code 
attribute -> new value 
style.property -> new style 

method 
setAttribute()
*/


var temp=document.getElementById("dom");
temp.innerHTML="BD";
temp.style.textDecoration="none";   //underline bad anchor er
temp.style.color="red";
temp.style.fontSize="1.5rem";

// https dewa mane just oita
// ager url er sathe just value ta add korbe
temp.href="https://google.com";


var h=document.getElementsByClassName("sp");
h[0].innerHTML="Say Hello";

// creating html element
var heading3=document.createElement("h1");
var txt=document.createTextNode("Created heading from js");
heading3.appendChild(txt);  //html create complete, boshano baki

dv=document.getElementsByClassName("my-div")[0];
dv.appendChild(heading3);

// adding element in upore, append niche add kore
var heading4=document.createElement("h1");
var txt=document.createTextNode("Upore boshlam");
heading4.appendChild(txt);
// first parameter kake add korbo, 2nd ta kar age
dv.insertBefore(heading4,h[0]);


// removing a elemnt
remov=document.getElementsByClassName("sp")[1];
dv.removeChild(remov);


// document.getElementById("bla").classList;
// oi element er shob class dekhabe
// document.getElementById("bla").classList.add("class2");  new class added
// document.getElementById("bla").classList.remove("class2"); class2 removed

// we can also replace by replaceChild(new,old);

