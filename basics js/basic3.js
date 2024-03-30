//New Number Methods
alert("helloworld");
//ES6 also added 2 new methods to the Number object:

//Number.isInteger()
//Number.isSafeInteger()
//The Number.isInteger() method returns true if the argument is an integer.
//document.getElementById("prasu").innerHTML =
//Number.isInteger(10) + "<br>" + Number.isInteger(10.5);
//The Number.isSafeInteger() Method
//A safe integer is an integer that can be exactly represented as a double precision number.

//The Number.isSafeInteger() metho//d returns true if the argument is a safe integer.

//Example isSafeInteger()
//document.getElementById("demo").innerHTML =
//Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890);
//let xy = 9007199254740992 === 9007199254740993;
//document.getElementById("hi").innerHTML = xy;
//Strict Mode
//All modern browsers support running JavaScript in "Strict Mode".
//JavaScript Declarations are Hoisted
xe = 5; // Assign 5 to x

elem = document.getElementById("nanna"); // Find an element 
elem.innerHTML = x;           // Display x in the element

var xe; // Declare
//The variable is in a "temporal dead zone" from the start of the block until it is declared:

Example
try {
    carName = "Saab";
    let carName = "Volvo";
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err;
  }




//Using a const variable before it is declared, is a syntax error, so the code will simply not run.
carName = "Volvo";
//const carName;
document.getElementById("demo").innerHTML = carName;
var x = 5;  // Initialize x

elem = document.getElementById("demo");      // Find an element 
elem.innerHTML = "x is " + x + " and y is " + y;  // Display x and y

var y = 7;  // In
//"use strict"; 
"use strict";
x = 3.14;  // This will cause an error (x is not defined).
//Declared inside a function, it has local scope (only "use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will cause an error (y is not defined)
}
///       not allowed in strict mode

/*Using an object, without declaring it, is not allowed:
"use strict";
x = {p1:10, p2:20}; 


Deleting a variable (or object) is not allowed.
"use strict";
let x = 3.14;
delete x;  


Deleting a function is not allowed
"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 




Duplicating a parameter name is not allowed:
"use strict";
function x(p1, p1) {};  


Octal numeric literals are not allowed:
"use strict";
let x = 010;


Octal escape characters are not allowed:
"use strict";
let x = "\010";            // This will cause an error




Writing to a read-only property is not allowed:
"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error



Writing to a get-only property is not allowed:
"use strict";
const obj = {get x() {return 0} };

obj.x = 3.14;  


Deleting an undeletable property is not allowed:
"use strict";
delete Object.prototype; // 

The word eval cannot be used as a variable:
"use strict";
let eval = 3.14;  

The word arguments cannot be used as a variable:
"use strict";
let arguments = 3.14;


The with statement is not allowed:
"use strict";
with (Math){x = cos(2)};



For security reasons, eval() is not allowed to create variables in the scope from which it was called.
In strict mode, a variable can not be used before it is declared:
"use strict";
eval ("x = 2");
alert (x);  


In strict mode, eval() can not declare a variable usineval() can not declare a variable using the let keyword:geval() can not declare a variable using the let keyword: the var keyword:
"use strict";
eval ("var x = 2");
alert (x); 



eval() can not declare a variable using the let ke
eval ("let x = 2");
alert (x); 




Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.

These are:

implements
interface
let
package
private
protected
public
static
yield
"use strict";
"use strict";
let public = 1500;
Future reserved keywords are not allowed in strict mode.

*/
// this keyword

const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
    }
  };









































