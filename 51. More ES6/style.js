// for of, for in
const names=['a','b','c'];

for(let name of names)
{
    document.write(name+" ");
}

// for in, object iterator
document.write("<br>");

let students={
    Id:101,
    name:'anis',
    cg:3.91
}

for(let x in students)
{
    document.write(x+" -> "+students[x]+"<br>");
}

// for each
var numbers=[10,20,30,40];

for(var x=0;x<numbers.length;x++)
{
    document.write(numbers[x]+" ");
}

// parameter ekta fuction, oikhane bola lagbe ki korbo
numbers.forEach(function(x){
    document.write(x+" ");
});

var sq=[];
numbers.forEach(function(x){
    sq.push(x*x);
});

document.write("<br>");
document.write(sq);

// numbers er prottek er sathe 5 add kore, numbers ei rakhbo
// x value-> item access , index=index->access, ar=main array ta access
numbers.forEach(function(x,index,ar){
    ar[index]=x+5;
});
document.write("<br>");
document.write(numbers);


// map,filter
// ager kaj ta map diye, map new array return kore so declare lagbe na
numbers=[11,12,3,14,5]
var squareNumber=numbers.map(function(x){
    return x*x;
});

// 10 er theke boro gula return korbe
var newNumbers= numbers.filter(function(){
    return x>10;
});

