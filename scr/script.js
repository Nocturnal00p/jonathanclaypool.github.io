var fpPics = [document.getElementById("frontpage1"), document.getElementById("frontpage2")];

var w = window.innerWidth;

var colors = ['red','blue','green','gold'];

var countColors = 0;

var name;

var gotName = 0;

if (w < 1000)
	{
	document.getElementById("menu").style.borderRight = "5px solid #706f6f";
	document.getElementById("menu").style.borderBottom = "5px none #706f6f";
	document.getElementById("h1").style.fontSize = "30px";
	document.getElementById("p1").style.fontSize = "12px";
	}
console.log(w);

function getName(){
countColors =0;
setColor();
if(gotName==0)
{	name = prompt("What is your name?");
	gotName = 1;
	document.getElementById('home').innerHTML = "<button onclick=\"getName();\">Home</button>";
}
document.getElementById("h1").innerHTML = "&#161~Welcome, " + name + "~!" + "<img class=\"reel\" id=\"frontpage1\" src=\"img/test640.jpg\">";
document.getElementById("h1").style.margin = "10px 10px 5px 0";
document.getElementById("p1").innerHTML = "\"This is a very <strong>bad</strong> photograph.\" ~ Jonathan";
document.getElementById("h2").innerHTML = "<img id=\"frontpage2\" src=\"img/test6402.jpg\">";
}

function myFunction(){
	fpPics[0].src = fpPics[1].src;
}

function aboutMe(){
	countColors = 0;
	setColor();
	document.getElementById("h1").style.margin = "10px 10px 5px 0";
	document.getElementById("h1").innerHTML = "The year is 1994...<img class=\"reel\" id=\"frontpage1\" src=\"img/about640.jpg\">";
	document.getElementById("h2").innerHTML = "";
	document.getElementById("p1").innerHTML = "Born and raised in Austin, TX<br>2009:Install first GPU (Radeon 5450)<br>2012:Graduated from Vandegrift Highschool<br>2015: Install second GPU (GTX 970)<br>2016:Graduated from University of Texas-Dallas";
}

function resume(){
	document.getElementById("h1").innerHTML = "";
	document.getElementById("h2").innerHTML = "";
	if(w > 1000)
	{
		document.getElementById("p1").innerHTML = "<embed src=\"doc/resume.pdf\" type=\"application/pdf\" height=\"800\" width=\"850\">";
	}
	else
	{
		document.getElementById("p1").innerHTML = "<a href=\"doc/resume.pdf\">Click here to view resume.</a>";
	}
}

function imagePage(){
	countColors = 0;
	setColor();
	document.getElementById("h1").innerHTML = "Images";
	document.getElementById("h2").innerHTML = "";
	document.getElementById("p1").innerHTML = "A rain pool<img class=\"reel\" src=\"img/img001l.jpg\">A view twenty floors up<img class=\"reel\" src=\"img/img002l.jpg\">The sun begins to set<img class=\"reel\" src=\"img/img003l.jpg\">Moments later...<img class=\"reel\" src=\"img/img004l.jpg\">";
	document.getElementById("h1").style.margin = "10px 10px 20px 0";
}

function setColor(){
	document.getElementById("h1").style.textShadow = "3px 3px 3px " + colors[countColors];
}

function rotateColor(){
	countColors = (countColors+1)%4;
	setColor();
}

function artPage(){
	countColors = 0;
	setColor();
	document.getElementById("h1").innerHTML = "Creativity Gallery";
	document.getElementById("h1").style.margin = "10px 10px 20px 0";
	document.getElementById("h2").innerHTML = "";
	fpPics[0].src = "";
	fpPics[1].src = "";
	if(w < 480)
	{
		alert("Please use landscape view for Gallery");
		document.getElementById("page").style.width = (w) + "px";
		document.getElementById("page").style.clear = "left";
		document.getElementById("p1").innerHTML = "<button onclick=\"startVideo();\">I Rotated</button>"
	}
	else{startVideo();}
	
}

function startVideo () {
	document.getElementById("p1").innerHTML = "<video width=\"300\" height=\"127\" controls><source src=\"vid/vid1.mp4\" type=\"video/mp4\"></video><br>Video mix of Shigoto's 'Look at all the smiling faces' with Kpop";
}