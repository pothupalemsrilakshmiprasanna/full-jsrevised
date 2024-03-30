//Minimum and Maximum Safe Integers
//ES6 added max and min properties to the Number object:

//MAX_SAFE_INTEGER
//MIN_SAFE_INTEGER

let  ab = Number.MAX_SAFE_INTEGER;
document.getElementById("prasu").innerHTML = ab;

let  bc = Number.MIN_SAFE_INTEGER;
document.getElementById("demo").innerHTML = bc;
//Function Declarations
let x = myFunction(4, 3);
document.getElementById("id").innerHTML = x;
function myFunction(a, b) {
    return a * b;
  }
  //function expressions
  const p = function (a, b) {return a * b};
document.getElementById("hi").innerHTML = p;
//The Function() Constructor
const mFunction = new Function("a", "b", "return a * b");
document.getElementById("nanna").innerHTML = mFunction(4, 3);

//Self-Invoking Functions

(function () {
    document.getElementById("na").innerHTML = "Hello! I called myself";
  })();
  //Functions Can Be Used as Values
  //JavaScript functions can be used in expressions: (* operators ..et)

 // The arguments.length property returns the number of arguments received when the function was invoked:
 function myFunction(a, b) {
    return arguments.length;
  }
  document.getElementById("sorry").innerHTML = myFunction(4, 3);
  //The toString() method returns the function as a string:
  function myFunction(a, b) {
    return a * b;
  }
  document.getElementById("happy").innerHTML = myFunction.toString();



// function call
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  document.getElementById("a").innerHTML = person.fullName.call(person1); 
  document.getElementById("b").innerHTML = person.fullName.call(person2); 
// function apply

const personn = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const personn1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  document.getElementById("c").innerHTML = personn.fullName.apply(personn1, ["Oslo", "Norway"]); 

//function bind
const pperson = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = pperson.fullName.bind(member);

document.getElementById("e").innerHTML = fullName();

// function parameters
// default parameters
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }  
  return x * y;
}
document.getElementById("f").innerHTML = myFunction(4);
// default parameter values
function myFunction(x, y = 10) {
  return x + y;
}
document.getElementById("g").innerHTML = myFunction(5);
//The Rest Parameter
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let xy = sum(4, 9, 16, 25, 29, 100, 66, 77);

document.getElementById("h").innerHTML = xy;
// invoking a function
function myFunction(a, b) {
  return a * b;
}
document.getElementById("i").innerHTML = myFunction(10, 2); 
// invoking a function as a constructor
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

const myObj = new myFunction("John","Doe")
document.getElementById("j").innerHTML = myObj.firstName;
  //Simulate a Max Method on Arrays
  //Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.
  //The first argument (null) doenot matter. It is not used in this example.


  document.getElementById("d").innerHTML = Math.max.apply(null, [1,2,3]); 
  
  // template strings
  var example="cricket"
  document.write(`i like playing ${example}`)//template literals or template strings
  
  
  function apple(){
      document.write(`i like apples <br>`)
  }
  apple()
  
  
  const mango=function(){
      document.write(`mangoes are sweet <br>`)
  }
  mango()
  //arrow function

const prasanna=()=>{document.write(`i like salad <br>`)}
prasanna()
// for of  arrays
const myvalues=[1,2,3,4,5,6,7]
const students=["mahesh","suresh","prakesh"]
myvalues.forEach(function(a){
    document.write(a +"<br>")

})

for(const a of myvalues){ 
   document.write(students +"<br>")// for ... of for array
}

// for in objects
const cities={
    one:"hyderabad",
    two:"Delhi",
    three:"Bangalore",
    four:"chennai"
}

for(let x in cities){
    document.write(x )//for ..in for object
    document.write(cities[x] +"<br>")
}


//rest operator
function samplerest(name, ...mycollection){
  let examplevalue=0;
  for(let i in mycollection){
      examplevalue+=mycollection[i]
  }
  document.write(name,examplevalue +"<br>")

}
samplerest("kalyan",10,20,30,40)
//spread operator


const fruits=["apple","mango","grapes"]
const veggies=["onion","potato","tomato"]
const allitems=[...fruits,...veggies]
document.write(allitems)



const firstname={
  fname:"suman"

}
const lastname={
  lname:"kalyan"
}
const fullname={...firstname,...lastname}
console.log(fullname)// spread operator in objects
document.write(fullname.fname,fullname.lname)

