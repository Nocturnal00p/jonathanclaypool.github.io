var fpPics = [document.getElementById("frontpage1"), document.getElementById("frontpage2")];


function myFunction(){
	fpPics[0].src = fpPics[1].src;
	document.getElementById("menu").style.borderRight = "5px solid #706f6f";
}