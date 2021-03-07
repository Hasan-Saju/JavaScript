// image slider

var photos=["images/newslider5.jpg","images/newslider7.jpg","images/newslider8.jpg"];
var imgTag=document.getElementsByTagName("img")[0];

var count=0;
function prev()
{   
    count++;
    count%=3;
    imgTag.src=photos[count];
    
}

function next()
{
    count--;
    count=(count+3)%3;
    imgTag.src=photos[count];
}

// change css run time

var pTag=document.getElementsByTagName("p")[0];
function addStyle()
{
    /*
    pTag.style.color="red";
    pTag.style.fontSize="3rem";
    pTag.style.fontWeight="bold";
    pTag.style.fontStyle="italic";
    */
   pTag.classList.add("para-style");    //css class ta add kore nilam

}

function removeStyle()
{
    pTag.classList.remove("para-style");
}

// Event Listener
var btn=document.getElementById("eventListen");
// 2 param, first kon type listener, 2nd ki hobe click korle(no bracket with fn )
btn.addEventListener("click",myfnc); 
// chaile mouse over, mouse out, mouse click egula o add kora jay

function myfnc()
{
    alert("Danger!");
}

// same task with anonymous fnction , jst fnction name lagbe na
btn.addEventListener("click",function(){
    alert("Danger!");
}); 



var heading=document.getElementById("ninja");

heading.addEventListener("mouseover", function(){
    heading.classList.add("para-style");
});

heading.addEventListener("mouseout", function(){
    heading.classList.remove("para-style");
});

// event listener with multiple elements

var len=document.querySelectorAll(".myButton").length;

for(var i=0;i<len;i++)
{
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){

        var txt=this.innerHTML;
        document.querySelector("#multiListen").innerHTML=txt+ " is clicked";
    });
}

// audio


for(var i=0;i<3;i++)
{
    document.querySelectorAll(".audio")[i].addEventListener("click",function(){

        var text=this.innerHTML;
        audioDistribution(text);
    });
}

function audioDistribution(text)
{
    switch(text){
        case "Button 1":
            var audio=new Audio('sounds/audio1.mp3');
            audio.play();
            break;
        case "Button 2":
            var audio=new Audio('sounds/audio2.mp3');
            audio.play();
            break;
        case "Button 3":
            var audio=new Audio('sounds/audio1.mp3');
            audio.play();
            break;
    }
}

// animation

for(var i=0;i<3;i++)
{
    document.querySelectorAll(".animate")[i].addEventListener("click",function(){

        var text=this.innerHTML;
        playAnimation(text);
    });
}

function playAnimation(text)
{
    var btn=document.querySelector("."+text);  // .a diye button gula khujlam
    btn.classList.add("anim");

    // kaj, shomos (ms)     1000 means =1 sec
    setTimeout(function(){
        btn.classList.remove("anim");
    },1000);
}

// for keypress,document er sathe listener
document.addEventListener("keypress",function(event){
    var text=event.key; //jei key press korsi oita chole ashbe eikhane
    playAnimation(text);
});

document.addEventListener("keypress",function(event){
    var txt=event.key;

    document.querySelector("#key").innerHTML="You have pressed "+txt;
});