var fpPics = [document.getElementById("frontpage1"), document.getElementById("frontpage2")];

var w = window.innerWidth;

var colors = ['red','blue','green','gold'];

var countColors = 0;

if (w < 1000)
	{
	document.getElementById("menu").style.borderRight = "5px solid #706f6f";
	document.getElementById("menu").style.borderBottom = "5px none #706f6f";
	document.getElementById("h1").style.fontSize = "30px";
	document.getElementById("p1").style.fontSize = "10px";
	}
console.log(w);

function getName(){
countColors = 0;
var name = prompt("What is your name?");
document.getElementById("h1").innerHTML = "&#161~Welcome, " + name + "~!"
fpPics[0].src = "img/test640.jpg";
fpPics[1].src = "img/test6402.jpg";
document.getElementById("p1").innerHTML = "\"This is a very <strong>bad</strong> photograph.\" ~ Jonathan"
}

function myFunction(){
	fpPics[0].src = fpPics[1].src;
}

function aboutMe(){
	countColors = 0;
	document.getElementById("h1").innerHTML = "The year is 1994...";
	fpPics[0].src = "img/about640.jpg";
	fpPics[1].src = "";
	document.getElementById("p1").innerHTML = "Born and raised in Austin, TX<br>2009:Install first GPU (Radeon 5450)<br>2012:Graduated from Vandegrift Highschool<br>2015: Install second GPU (GTX 970)<br>2016:Graduated from University of Texas-Dallas";
}

function resume(){
	document.getElementById("h1").innerHTML = "";
	if(w > 1000)
	{
		document.getElementById("p1").innerHTML = "<embed src=\"doc/resume.pdf\" type=\"application/pdf\" height=\"800\" width=\"850\">";
	}
	else
	{
		document.getElementById("p1").innerHTML = "<a href=\"doc/resume.pdf\">Click here to view resume.</a>";
	}
	fpPics[0].src = "";
	fpPics[1].src = "";
}

function imagePage(){
	countColors = 0;
	document.getElementById("h1").innerHTML = "Images";
	document.getElementById("p1").innerHTML = "A rain pool<img class=\"reel\" src=\"img/img001l.jpg\">A view twenty floors up<img class=\"reel\" src=\"img/img002l.jpg\">The sun begins to set<img class=\"reel\" src=\"img/img003l.jpg\">Moments later...<img class=\"reel\" src=\"img/img004l.jpg\">";
	fpPics[0].src = "";
	fpPics[1].src = "";
}

function rotateColor(){
	countColors = (countColors+1)%colors.length
	document.getElementById("h1").style.textShadow = "3px 3px 3px " + colors[countColors];
}