var fpPics = [document.getElementById("frontpage1"), document.getElementById("frontpage2")];

var w = window.innerWidth;

if (w < 1000)
	{
	document.getElementById("menu").style.borderRight = "5px solid #706f6f";
	document.getElementById("menu").style.borderBottom = "5px none #706f6f";
	document.getElementById("h1").style.fontSize = "30px";
	}
console.log(w);

function getName(){
var name = prompt("What is your name?");
document.getElementById("h1").innerHTML = "!~Welcome, " + name + "~!"
fpPics[0].src = "img/test640.jpg";
fpPics[1].src = "img/test6402.jpg";
document.getElementById("p1").innerHTML = "\"This is a very <strong>bad</strong> photograph.\" ~ Jonathan"
}

function myFunction(){
	fpPics[0].src = fpPics[1].src;
}

function aboutMe(){
	document.getElementById("h1").innerHTML = "The year is 1994...";
	fpPics[0].src = "img/about640.jpg";
	fpPics[1].src = "";
	document.getElementById("p1").innerHTML = "Born and raised in Austin, TX<br>2012:Graduated from Vandegrift Highschool<br>2016:Graduated from University of Texas-Dallas";
}

function resume(){
	document.getElementById("h1").innerHTML = "";
	document.getElementById("p1").innerHTML = "<embed src=\"doc/resume.pdf\" type=\"application/pdf\" height=\"800\" width=\"640\">";
	fpPics[0].src = "";
	fpPics[1].src = "";
}