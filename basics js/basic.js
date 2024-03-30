// 1   3 methods 
//1 inlinejs <script alert("hello")></script>
//2 internal js <script>  alert ("hello"</script>
//3 external js  <script src="pathname"> <script>
// js syntax overview
//variable declaration
var greeting="helloworld!";
//function definition
function sayhello(){
    console.log(greeting);
}
sayhello(); // function call
// js outputs
var ae=document.getElementById("output");
ae.innerHTML="helloworld";
document.write(greeting);
 console.log(greeting);
 window.alert(greeting);// 4 methods 1 innerhtml 2 document.write  3 window.alert()  4 console.log()
 //variables in js 
 // in js variables are used to store and manipulate data. they serve as named container that hold values
 //types of variables 1 var 2 let 3 const 

var bunty="playing"
console.log(bunty)
var bunty="singing"// in var so many times we can define same variables but in let and const only one time we can define value otherwise error
console.log(bunty)
let school="nursery"
console.log(school)
const ground="stadium"
console.log(ground)
//datatypes string, number,boolean,null ,bigint,undefined are primitive datatypes and array , object are  complex datatypes
var ae="this is a text message"
console.log(ae)//stringdt
var ae= 123243
console.log(ae)//numberdt
document.write(ae)
boolean=true,false
test=10<20;
console.log(test);//boolean
let sampleview=null;
console.log(sampleview)//null 
let apple;
console.log(apple)// undefined
let fruits=[
    "apple","mango",55,{name:"kalyan"}
]
console.log(fruits)//array
document.write(fruits)
const games={
    cricket:"dhoni"
    

}
console.log(games);//object
console.log(typeof games);
let x=BigInt("9875091370")
console.log(x);

// dialog boxes
/*if(10==10){
    alert("10 is equal to 10")
  }
  var woman=confirm("are you a woman")
  if(woman){
    let name=prompt("please enter your name");
  document.write("hello madam"+name+"welcome to my page " )
  }
  else{
      let name=prompt("please enter your name");
     document.write("hello mr."+name+"welcome to my page");
  }*/// dialog  boxes
  


//operators and expressions 
// arithmetic , asssignment , comparison ,logical operators,string operators ,bitwise operators , ternary operators , type operators
var a=60;
var b=40;
document.write(a+b,"<br>")//arthiemetic addition
document.write(a-b,"</br>")// sub
document.write(a*b,"</br>")//mul
document.write(a/b,"</br>")//div
document.write(a%b,"</br>")//rem
document.write(a**b,"</br>")//exponentiation
var a=60;
a++;
var b=40;
b--;

document.write("result:",a ,"</br>")//increment
document.write("result:",b,"</br>")//decrement

// assignment operators 
var p=60;
var q=40;
document.write(a==b,"<br>")
document.write(p+=q,"<br>")
document.write(p-=3,"<br>")
document.write(p*=1,"<br>")
document.write(p/=4,"<br>")
document.write(p%=9,"<br>")
document.write(p**=3,"<br>")
var d=10;
var e=20;
//comparison operaters
document.write(d==e,"<br>")
document.write(d===e,"<br>")
document.write(d!=e,"<br>")
document.write(d!==e,"<br>")
document.write(d>e,"<br>")
document.write(d<e,"<br>")
document.write(d>=e,"<br>")
document.write(d<=e,"<br>")

document.write(d??e,"<br>")
document.write(greeting);
//logical operators 

document.write(p&&=q,"<br>")

document.write(p||=q,"<br>")
document.write(p!=q,"<br>")
document.write(p&&q,"<br>")
//shift operators and bitwise operators
document.write("happy")
document.write(p<<=q,"<br>")
document.write(p>>=q,"<br>")
document.write(p&=q,"<br>")
document.write(p^=7,"<br>")
document.write(~p,"<br>")
document.write(p>>>=q,"<br>")
 var f=4;
var l=6;
document.write(f+l==5? "yes correct an":" no")

// type conversions
var m="33";
var n=44;
document.write(typeof n,"</br>")
var o=number(m)
document.write(typeof o)
var z=string(n)
document.write(typeof z)
