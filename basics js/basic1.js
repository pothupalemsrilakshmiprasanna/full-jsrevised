// control flow& conditional statements
//if ,if-else, if-else-if, switch 
var game="cricket";
let captain="dhoni";
if(game=="cricket"){
    document.write("match captain is ",captain)
}
else{
    document.write("sorry arong answer","</br>")
}
let tennis="sania";
if(tennis=="sania"){
    document.write("correct","</br>")

}
else{
    document.write("nothing is matching")
}
var k=100;
var y=500;
var z=200;
if(k == y)
{
    document.write("x is equal to y")

}
else if(y < z)
{
    document.write("blue color")


} 
 else if(z > k)
{
    document.write("yellow color","</br>")

} else {
    document.write("all wrong statemnets")
}
switch(true){
    case 10>20:myanswer="red color"
    break;

    case 20<30:myanswer="green color"
    break;
    case 50>20:myanswer="black color"
    break;
    case 100==200:myanswer="orange color"
    break;
    default:myanswer="none of the above"
    break;

}
document.write(myanswer);
let name=prompt("please enter your name");
let marks=prompt("please enter your marks")
switch(true){
   case marks>90&&marks<=100: result="great you are the topper"
   break;
    case marks>65&&marks<=90:  result="congratulations you got the first class"
    break;
  case marks>40&&marks<65: result="you got second class"
  break;
    case marks>=30&&marks<=40: result="you got third class"
   break;
    case marks<30:result="sry you are failed,better next time"
    break;
    default: result:"please enter your marks"
    break;

}
document.write(result)
document.write("hello"+name+"yours"+marks)
// loops like for and while enable you to execute code repeadtedly. they are useful for iterating through arrays lists or performing tasks or a specific number of times

let n=3;
for(i=0;i<n;i++){
    document.write(i+"</br>");// for loop
}
let x=9;
let j=0;
while(j<x){
    document.write(j+"</br>");


    j++;
}
document.write(j+"</br>");
//methods

//methods

//array method
//string method
//object method


//array methods
//push()  pop()  shift()  unshift()   concat()
// join() slice() splice() indexof() foreach()
let sports=["cricket","football"]
sports.push("socker",68)
document.write(sports+"</br>")
//push method - add elements ending
document.write(sports.length+"</br>")

//pop mehod - delete elements ending
let books=["maths","physics", "chemistry"]
books.pop()
document.write(books)


var book=["maths","physics","chemistry"];
let someresult=book.pop()
document.write(book+"</br>")
document.write( "deleted by pop method is"+someresult+"<br>");

// shift method -delete elements begin
let states=["delhi","mumbai","hyderabad"];
  let a=states.shift()
document.write(states+"</br>");
document.write(states.length +"</br>")
document.write("deleted by shift method :",a+"<br>")//shift method

// unshift()-add elements begin
let scores=[22,3,34,232,3434,"amar"]
scores.unshift("suresh");
document.write(scores+"</br>")
document.write(scores.length+"</br>" )
// concat - combines two elements
let score=[11,22,32,43];
let players=["amith","suresh","mahesh"]
let newplayers=score.concat(players)
document.write(newplayers+"</br>");
// join() - putting "/" b/w them
var team=[10,20,30,40,"anil","sunil","madhavi"]
var myteam=team.join("/")// join()
document.write(myteam+"</br>")

//slice() = define have
let studen=["anil","balu","karhtik",10,20,30,40]

let mystuden=studen.slice(0,4)
document.write(mystuden+"</br>")
console.log(studen)


// splice = define not have
let mynumbers=[0,1,2,3,4,5,6,7,8,9];
let mynewnumbers=mynumbers.splice(0,5);
document.write(mynumbers+"</br>");
document.write(mynewnummbers+"</br>");


