
//string methods
//split() trim() char at() substring() replace() to uppercase() tolowercase()
// split -- divide with commas
var sample="this is string sample test"
document.write(sample.split(" "))
// trim -- delete space
var students="ramesh is a very good boy";
document.write(students.trim()+"<br>");
console.log(students.trim())

//(a,b) a delete b lopala
document.write(students.substring(1,4)+"<br>");
document.write(students.charAt(5)+"<br>")


//string charCodeAt()     The charCodeAt() method returns the code of the character at a specified index in a string:
let text = "HELLO WORLD";
document.getElementById("demo").innerHTML = text.charCodeAt(0);



//String length()     The length property returns the length of a string:
let texts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = texts.length;
//String at()
const name = "W3Schools";
let letter = name.at(2);

document.getElementById("demo").innerHTML = letter;
//String [ ]
let textss = "HELLO WORLD";
document.getElementById("demo").innerHTML = textss[0];
//String slice()--- define have
let textsss = "Apple, Banana, Kiwi";
let part = textsss.slice(7,13);
document.getElementById("demo").innerHTML = part; 
//String substr()  similar to slice

//String toUpperCase()          A string is converted to upper case with toUpperCase():
function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.toUpperCase();
  }
//String toLowerCase()      A string is converted to lower case with toLowerCase():  
function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.toLowerCase();
  }

//String concat()         concat() joins two or more strings:
let text11 = "Hello";
let text212 = "World!";
let text3 = text11.concat(" ",text212);
document.getElementById("demo").innerHTML = text3;
//String trimStart()        The trimStart() method works like trim(), but removes whitespace only from the start of a string. 
let text1= "     Hello World!     ";
let text2 = text1.trimStart();

document.getElementById("demo").innerHTML =
"Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
//String trimEnd()            The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let texts1 = "     Hello World!     ";
let texts2 = text1.trimEnd();

document.getElementById("demo").innerHTML =
"Length text1 = " + texts1.length + "<br>Length text2 = " + texts2.length;



//String padStart()            The padStart() method pads a string from the start.
let tex = "5";
tex = tex.padStart(4,"0");

document.getElementById("demo").innerHTML = tex; 
//String padEnd()        The padEnd() method pads a string from the end.
let texte = "5";
text = texte.padEnd(4,"0");

document.getElementById("demo").innerHTML = texte;
//String repeat()         The repeat() method returns a string with a number of copies of a string.
let textm = "Hello world!";
let result = textm.repeat(2);

document.getElementById("demo").innerHTML = result;
//String replace()        The replace() method replaces a specified value with another value in a string:
function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.replace("Microsoft","W3Schools");
  }

//String replaceAll()     


let textp = "I love cats. Cats are very easy to love. Cats are very popular."
textp = textp.replaceAll("Cats","Dogs");
textp = textp.replaceAll("cats","dogs");

document.getElementById("demo").innerHTML = textp;


// 

//JavaScript String startsWith()
//The startsWith() method returns true if a string begins with a specified value.

//Otherwise it returns false:


let te= "Hello world, welcome to the universe.";
document.getElementById("demo").innerHTML = te.startsWith("Hello");





//JavaScript String endsWith()
//The endsWith() method returns true if a string ends with a specified value.

//Otherwise it returns false:

let t = "Hello world, welcome to the universe.";
document.getElementById("demo").innerHTML = t.endsWith("world", 11);


//looping statements


for(a=5;a<=10;a++){s
    document.write(a+"."+"l love india"+"</br>")
}

let x=0;
while(x<=10){
    document.write( x+"."+"hello everyone"+"</br>")
    x++;
}


let y=21;
do {
document.write("this is do-while statement")
y++;
}while(y>20)

 


events&event listeners

.addeventlistener
some of the html events 1 mouseevents 2 keyboardevents 3 formevents 4 bodyevents 5 window events
1mouse events
event that occurs when the mouse interacts with the html document important mouse events

onclick--when mouse click an element
ondblclick--when mouse double click an element
onmouseover-- when the cursor of the mouse comes over an element
onmouseout--when the cursor of the mouse leaves on element
onmouseenter--when the cursor enters
onmouseleave-- when the cursor leaves
onmouseup--when the mouse button is releaseed over the elements
onmousedown-- when the mouse button is press over an element
onmousemove--when mouse movement takes place
 
2keyboard events
the key events happens whereas a vsel interacts with keyboard event that occurs when user provides a key on the keyboard. there are mainly three key events
onkeydown--the event rises when the user releases the key
onkeyup-- this event fires when the user in pressing a key
onkeypress--this event fires when the user presses the key



3 formevents
events that occur through the interactionof an user with an html form are called of js  form events
onsubmit --fires when a form is submited
onreset--  fires when the reset button in a form is clicked
onfocus--  fires the movement when the get focus
onblur--   fires the movement that the element loses focus --if you give smallcase turns into uppercase
onchange-- fires the movement when the  values of  the element is changed--dropdown
oninput--  script the be run when on the element get user input

*/





























