// try,catch,finally,throw

/*
try
{
    // code test
    alert("Hi Everyone");
    alert(x);   //error por ar kaj korbe na
    alert("Bye everyone");

}catch(error){          //error ba onno name o valid
    // handle error
    alert("Inside catch block");
    document.write(error+"<br>");
    document.write(error.name+"<br>");
    document.write(error.message+"<br>");
}finally{
    // ei part always kaj korbe
    alert("Bye everyone");
}
*/

// throw can make custom error

document.querySelector("#check").addEventListener("click",function(){
   var num=document.querySelector("#numText").value;
    //document.write(num);

    try{
        if(num<5)
        {
            throw "input is too low";
        }
        else if(num>10)
        {
            throw "input is too big";
        }
    }catch(error)
    {
        document.write(error);
    }


});