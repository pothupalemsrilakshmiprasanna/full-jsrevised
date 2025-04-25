Web API?
API stands for Application Programming Interface.
A Web API is an application programming interface for the Web.

A Browser API can extend the functionality of a web browser.

A Server API can extend the functionality of a web server.
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Geolocation</h2>

<p>Click the button to get your coordinates.</p>

<button onclick="getLocation()">Try It</button>

<p id="demo"></p>

<script>
const x = document.getElementById("demo");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
</script>

</body>
</html>
JavaScript Validation API

checkValidity()	          Returns true if an input element contains valid data.
setCustomValidity()	   Sets the validationMessage property of an input element.


validity	    Contains boolean properties related to the validity of an input element.
validationMessage    Contains the message a browser will display when the validity is false.
willValidate	      Indicates if an input element will be validated.


Validity Properties
The validity property of an input element contains a number of properties related to the validity of data:

Property	Description
customError	Set to true, if a custom validity message is set.
patternMismatch	Set to true, if an element's value does not match its pattern attribute.
rangeOverflow	Set to true, if an element's value is greater than its max attribute.
rangeUnderflow	Set to true, if an element's value is less than its min attribute.
stepMismatch	Set to true, if an element's value is invalid per its step attribute.
tooLong	Set to true, if an element's value exceeds its maxLength attribute.
typeMismatch	Set to true, if an element's value is invalid per its type attribute.
valueMissing	Set to true, if an element (with a required attribute) has no value.
valid	Set to true, if an element's value is valid.

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Validation</h2>

<p>Enter a number and click OK:</p>

<input id="id1" type="number" max="100">
<button onclick="myFunction()">OK</button>

<p>If the number is greater than 100 (the input's max attribute), an error message will be displayed.</p>

<p id="demo"></p>

<script>
function myFunction() {
  let text;
  if (document.getElementById("id1").validity.rangeOverflow) {
    text = "Value too large";
  } else {
    text = "Input OK";
  } 
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Validation</h2>

<p>Enter a number and click OK:</p>

<input id="id1" type="number" min="100">
<button onclick="myFunction()">OK</button>

<p>If the number is less than 100 (the input's min attribute), an error message will be displayed.</p>

<p id="demo"></p>

<script>
function myFunction() {
  let text;
  if (document.getElementById("id1").validity.rangeUnderflow) {
    text = "Value too small";
  } else {
    text = "Input OK";
  } 
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>


Web History API



























