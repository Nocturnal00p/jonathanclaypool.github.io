

document.getElementById("foot01").innerHTML =
"<p>&hearts;  " + new Date().getFullYear() + " Jonathan Claypool </p>";
 
document.getElementById("nav01").innerHTML = 
"<ul id='menu'>" + "<li><a href='index.html'>Home</a></li>" +
"<li><a href='Casualties.html'>Casualties</a></li>" + "<li><a href='Wall.html'>Wall</a></li>"
+ "</ul>";

document.getElementById("woh").innerHTML = names;

function displayName() {
	
i=0;
var names = [];

function displayName2() {
	
	var fname =	document.getElementById("firstname").text; 
	var lname =	document.getElementById("lastname").text;
	var full = fname + " " + lname + "<br>";
	names.push(full);
	}

}