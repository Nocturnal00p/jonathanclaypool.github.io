document.getElementById("foot01").innerHTML =
"<p>&hearts;  " + new Date().getFullYear() + " Jonathan Claypool </p>";
 
document.getElementById("nav01").innerHTML = 
"<ul id='menu'>" + "<li><a href='index.html'>Home</a></li>" +
"<li><a href='Casualties.html'>Casualties</a></li>" + "<li><a href='Wall.html'>Wall</a></li>"
+ "</ul>";


function displayName() {
var fname =	document.getElementById("firstname").value; 
alert(fname);
var lname =	document.getElementById("lastname").value;
alert(lname);
document.getElementById("woh").innerHTML = fname + " " + lname + "<br>";
}