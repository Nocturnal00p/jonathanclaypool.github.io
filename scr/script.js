var fpPics = [document.getElementById("frontpage1"), document.getElementById("frontpage2")];

var w = window.innerWidth;

var name = prompt("What is your name?");
document.getElementById("h1").innerHTML = "!~Welcome, " + name + "~!"
if (w < 1000)
	{
	document.getElementById("menu").style.borderRight = "5px solid #706f6f";
	document.getElementById("menu").style.borderBottom = "5px none #706f6f";
	document.getElementById("h1").style.fontSize = "30px";
	}
console.log(w);

function myFunction(){
	fpPics[0].src = fpPics[1].src;
}