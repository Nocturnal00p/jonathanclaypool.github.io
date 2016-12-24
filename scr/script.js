var fpPics = [document.getElementById("frontpage1"), document.getElementById("frontpage2")];

var w = window.innerWidth;
if (w < 1000)
	{
	document.getElementById("menu").style.borderRight = "5px solid #706f6f";
	document.getElementById("menu").style.borderBottom = "5px none #706f6f";
	}
console.log(w);

function myFunction(){
	fpPics[0].src = fpPics[1].src;
}